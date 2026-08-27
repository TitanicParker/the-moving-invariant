# Data schema

## coordinates.json
Exactly 54 unique coordinate addresses spanning the complete 6 × 3 × 3 product.

## experiments.json
`experiment_id`, `title`, `status`, `evidence_label`, `question`, `path`.

## results.json
Initially empty. Future records must use an allowed evidence label and include provenance for `OBSERVED`.

## failures.json
`failure_id`, `type`, `evidence_label`, `status`, `description`, `provenance`.

## translations
Required fields: experiment_id, unit_id, source_text, source_language, source_resolution_status, source_coordinate, source_resolver, translation_text, target_language, translator_or_model, target_resolution_status, target_coordinate, target_resolver, comparison_status, blindness_conditions, notes, date, provenance, replication_status.

## primitive-challenges.json
Each future challenge should record candidate name, dimension challenged, example completed unit, why existing primitives allegedly fail, ablation test, nearest existing primitive, subtype/mechanism/scene check, domain-shift check, grain check, independent adjudications and status.
