import { applyTransformations } from "./geometry-transformer/transformation.js";
import { constructGeometries } from "./geometry-generator/geometry-mapper.js";
import { applyBooleanOperations } from "./geometry-operator/boolean-operator.js";
import { applyMaterials } from "./scene/materials.js";
import {drawEdges } from "./scene/edges.js";

function buildGeometry(structured) {
  console.log(structured);
  constructGeometries(structured);
  applyTransformations(structured);
  drawEdges(structured);
  applyBooleanOperations(structured);
  applyMaterials(structured);
}

export { buildGeometry };
