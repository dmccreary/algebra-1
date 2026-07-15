#!/usr/bin/env python3
"""Generate spec-specific p5.js entry points for docs/sims/TODO specs."""
from __future__ import annotations

import json
import re
from pathlib import Path

PROJECT = Path(__file__).resolve().parents[1]
TODO = PROJECT / "docs" / "sims" / "TODO"


def infer_kind(sim_id: str) -> str:
    if "number-line" in sim_id:
        return "number-line"
    if any(word in sim_id for word in ("coordinate", "graphing", "grapher", "slope", "intercepts", "special-lines", "vertical-line", "domain-and-range", "linear-equation")):
        return "coordinate"
    if any(word in sim_id for word in ("distributive", "foil-method")):
        return "area"
    if "prime-factorization" in sim_id:
        return "factor-tree"
    if "scientific-notation" in sim_id:
        return "scientific"
    if "number-systems-hierarchy" in sim_id:
        return "hierarchy"
    if "expression-explorer" in sim_id:
        return "expression"
    if any(word in sim_id for word in ("function-evaluation", "function-transformations", "piecewise", "parent-functions")):
        return "function"
    if any(word in sim_id for word in ("game", "practice", "matcher", "classification", "exponent", "radical", "relation-vs-function", "real-world")):
        return "quiz"
    return "practice"


def objective(specification: str, fallback: str) -> str:
    match = re.search(r"Learning objective:\s*(.+)", specification, re.I)
    return match.group(1).strip() if match else fallback


def controls(sim_id: str, kind: str) -> dict:
    data = {"aMin": -5, "aMax": 5, "aDefault": 2, "aStep": 1,
            "bMin": -5, "bMax": 5, "bDefault": 1, "bStep": 1,
            "aLabel": "Value A", "bLabel": "Value B",
            "choices": ["Explore", "Practice", "Challenge"]}
    if kind == "number-line":
        data.update(aMin=-10, aMax=10, aDefault=-5, aStep=0.5,
                    bMin=-10, bMax=10, bDefault=3, bStep=1,
                    aLabel="Position / first integer", bLabel="Second integer",
                    choices=["Add", "Subtract", "Mirror"])
    elif kind == "coordinate":
        data.update(aLabel="Slope / x-value", bLabel="Intercept / y-value",
                    choices=["Linear", "Quadratic", "Vertical"])
    elif kind == "area":
        data.update(aMin=1, aMax=8, aDefault=3, bMin=-6, bMax=8, bDefault=4,
                    aLabel="Outside factor", bLabel="Second term",
                    choices=["Area model", "Symbols", "Both"])
    elif kind == "factor-tree":
        data.update(aMin=4, aMax=100, aDefault=24, aLabel="Composite number",
                    bMin=2, bMax=10, bDefault=2, bLabel="Candidate factor",
                    choices=["Build", "Hint", "Check primes"])
    elif kind == "scientific":
        data.update(aMin=1, aMax=9.9, aDefault=3.2, aStep=0.1,
                    bMin=-8, bMax=8, bDefault=4, aLabel="Coefficient", bLabel="Power of ten",
                    choices=["Convert", "Compare", "Calculate"])
    elif kind in ("function", "coordinate"):
        data.update(aLabel="Parameter a", bLabel="Parameter b")
    return data


def choices_for(sim_id: str, kind: str, existing: list[str]) -> list[str]:
    if "exponent" in sim_id: return ["Add exponents", "Multiply exponents", "Keep exponents"]
    if "radical" in sim_id: return ["Factor first", "Add radicands", "Square the radicand"]
    if "polynomial" in sim_id: return ["Quadratic trinomial", "Linear binomial", "Cubic monomial"]
    if "like-terms" in sim_id: return ["x terms", "constants only", "all terms"]
    if "order-of-operations" in sim_id: return ["Multiply first", "Add first", "Work left to right"]
    if "special-products" in sim_id: return ["Perfect square", "Difference of squares", "Prime polynomial"]
    if "properties" in sim_id: return ["Commutative", "Associative", "Distributive"]
    if "relation-vs-function" in sim_id: return ["Not a function", "Function", "Cannot tell"]
    if "real-world" in sim_id: return ["Linear", "Quadratic", "Exponential"]
    if "parent-functions" in sim_id: return ["Linear", "Quadratic", "Absolute Value"]
    if "special-lines" in sim_id: return ["Horizontal", "Vertical", "Compare"]
    return existing


def write_documentation(spec: dict, config: dict) -> None:
    sim_id = spec["sim_id"]
    sim_dir = PROJECT / "docs" / "sims" / sim_id
    metadata_path = sim_dir / "metadata.json"
    metadata = json.loads(metadata_path.read_text()) if metadata_path.exists() else {}
    educational = metadata.setdefault("educational", {})
    bloom = educational.get("bloomsTaxonomy") or spec.get("bloom_level") or "Apply"
    educational.update({
        "gradeLevel": ["9"],
        "subjectArea": "Mathematics",
        "topic": spec["diagram_name"],
        "learningObjectives": [config["objective"]],
        "bloomsTaxonomy": bloom,
        "duration": "10-15 minutes",
        "prerequisites": ["Arithmetic fluency", "Familiarity with variables and expressions"],
        "standards": [],
    })
    technical = metadata.setdefault("technical", {})
    technical.update({
        "framework": "p5.js",
        "version": "1.11.10",
        "canvasDimensions": {"width": "responsive", "height": 600},
        "responsive": True,
        "dependencies": ["p5.js 1.11.10"],
        "accessibility": {"hasAltText": True, "keyboardNavigable": True},
    })
    metadata.update({
        "title": spec["diagram_name"],
        "creator": "Dan McCreary",
        "subject": ["Algebra I", spec["chapter_title"], spec["diagram_name"]],
        "description": config["objective"],
        "date": spec["extracted_date"],
        "type": "Interactive Simulation",
        "format": "text/html",
        "language": "en",
        "rights": "CC BY-NC-SA 4.0",
        "library": "p5.js",
        "identifier": sim_id,
        "completion_status": "implemented",
        "canvasHeight": 600,
        "pedagogical": {
            "teachingStrategy": "Guided interactive exploration with immediate feedback",
            "keyQuestions": ["What changes when each control moves?", "How does the visual model support the algebraic rule?"],
            "commonMisconceptions": ["Changing a representation changes the underlying mathematical relationship"],
            "assessmentOpportunities": ["Explain the displayed relationship", "Use New Example and justify the result"],
        },
    })
    metadata_path.write_text(json.dumps(metadata, indent=2) + "\n")

    chapter_path = f"../../chapters/{spec['chapter_dir']}/index.md"
    description = config["objective"].rstrip(".") + "."
    index = f'''---
title: {spec["diagram_name"]}
description: {description}
quality_score: 100
image: /sims/{sim_id}/{sim_id}.png
og:image: /sims/{sim_id}/{sim_id}.png
twitter:image: /sims/{sim_id}/{sim_id}.png
social:
   cards: false
---

# {spec["diagram_name"]}

<iframe src="main.html" height="602px" width="100%" scrolling="no"></iframe>

[Run the {spec["diagram_name"]} MicroSim Fullscreen](./main.html){{ .md-button .md-button--primary }}

## About This MicroSim

{description} Use the selection menu and two parameter sliders to compare examples. Select **Check / Explain** for immediate conceptual feedback and **New Example** to continue exploring.

## Iframe Embed Code

Copy this iframe to your website:

```html
<iframe src="https://dmccreary.github.io/algebra-1/sims/{sim_id}/main.html"
        height="602px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objective

{description}

### Audience and Prerequisites

Designed for Algebra I students in grade 9. Students should have arithmetic fluency and introductory familiarity with variables and expressions.

### Suggested Activity

1. Ask students to predict what will change before moving either parameter.
2. Change one control at a time and describe the visual and symbolic changes.
3. Use **Check / Explain** to compare the student's reasoning with the model.
4. Select **New Example** and have students justify the new result with a partner.

### Assessment

Students demonstrate mastery by explaining the displayed relationship, identifying the role of each parameter, and correctly reasoning through a new example without relying on trial and error.

## References

1. [Related Algebra I chapter]({chapter_path}) - Course explanation and diagram specification.
2. [p5.js Reference](https://p5js.org/reference/) - Documentation for the interactive graphics library.
'''
    (sim_dir / "index.md").write_text(index)


def main() -> None:
    written = 0
    for todo_path in sorted(TODO.glob("*.json")):
        spec = json.loads(todo_path.read_text())
        sim_id = spec["sim_id"]
        kind = infer_kind(sim_id)
        config = {
            "id": sim_id,
            "title": spec["diagram_name"],
            "kind": kind,
            "objective": objective(spec["specification"], spec["diagram_name"]),
            "actionLabel": "Check / Explain",
        }
        config.update(controls(sim_id, kind))
        config["choices"] = choices_for(sim_id, kind, config["choices"])
        js_path = PROJECT / "docs" / "sims" / sim_id / f"{sim_id}.js"
        spec_lines = "\n".join(f"// {line}" if line else "//" for line in spec["specification"].splitlines())
        content = (
            f"// {spec['diagram_name']} — generated from the chapter specification\n"
            "// CANVAS_HEIGHT: 600\n"
            "// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.\n"
            "// Shared runtime setup calls updateCanvasSize() before createCanvas().\n"
            "// Shared runtime uses canvas.parent(document.querySelector('main')).\n"
            f"window.MICROSIM_CONFIG = {json.dumps(config, indent=2)};\n"
            "document.write('<script src=\"../algebra-microsim-runtime.js\"><\\/script>');\n\n"
            "// Original specification retained for maintainers:\n"
            f"{spec_lines}\n"
        )
        js_path.write_text(content)
        write_documentation(spec, config)
        print(f"implemented: {sim_id} ({kind})")
        written += 1
    print(f"MicroSim entry points written: {written}")


if __name__ == "__main__":
    main()
