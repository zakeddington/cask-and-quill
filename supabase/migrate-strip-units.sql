-- Strip the % / ° unit symbols baked into abv and proof.
-- The frontend now adds these symbols at render time, so storing them causes duplication (e.g. "40%%").
-- Safe to run multiple times — each UPDATE only touches rows that still have the trailing symbol.

UPDATE bottles
SET abv = rtrim(abv, '%')
WHERE abv ~ '%$';

UPDATE bottles
SET proof = rtrim(proof, '°')
WHERE proof ~ '°$';
