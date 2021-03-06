/**
 * creates a JSON with all proficience levels
 */
generateProficienceJSON = function() {
  let json = "{\n";
  const repets = 200;

  for (var i = 1; i <= repets; i++) {
    json += `"${i}": {\n`;
    json += `  "exp": ${(i + 1) * (100 + i + 1) + Math.pow(i, 2)} \n`;
    json += "}";

    if (i < repets) {
      json += ",\n";
    }
  }
  json += "\n";
  json += "}";

  console.log(json);
};

/**
 * creates a JSON with all player levels
 */
generateLevelsJSON = function() {
  let json = "{\n";
  const repets = 200;

  for (var i = 1; i <= repets; i++) {
    json += `"${i}": {\n`;
    json += `  "exp": ${i * (100 + i) + Math.pow(i, 2)} \n`;
    json += "}";

    if (i < repets) {
      json += ",\n";
    }
  }
  json += "\n";
  json += "}";

  console.log(json);
};
