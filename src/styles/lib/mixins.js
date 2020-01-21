const mixins = ({ depth = 1, strength = 1, color = "0,0,0" }) => {
  switch (depth) {
    case 1:
      return `box-shadow:0 1px 3px rgba(${color},${strength *
        0.14}, 0, 1px 2px rgba(${color},${strength * 0.24}))`;
    case 2:
      return `box-shadow:0 3px 6px rgba(${color},${strength *
        0.16}, 0, 3px 6px rgba(${color},${strength * 0.23}))`;
    case 3:
      return `box-shadow: 0 10px 20px rgba(${color}, ${strength * 0.19}),
               0 6px 6px rgba(${color}, ${strength * 0.23})`;
    case 4:
      return ` 0 15px 30px rgba('${color}', '${strength * 0.25}'),
               0 10px 10px rgba('${color}', '${strength * 0.22}');`;
    case 5:
      return `box-shadow: 0 20px 40px rgba(${color}, ${strength * 0.3}),
              0 15px 12px rgba(${color}, ${strength * 0.22})`;

    default:
      return console.error("depth must be between 1 and 5");
  }
};
export default mixins;
