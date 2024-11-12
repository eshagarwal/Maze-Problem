function getExit(position) {
  // for e.g for E the starting position is already an exit
  if (position.isExit()) {
    return position;
  }

  // mark visited
  position.setVisited();

  // to explore each direction
  function explore(direction) {
    const nextPosition = position[direction]();

    // check if the position exists and has not been explored/visited
    if (nextPosition && !nextPosition.getVisited()) {
      // searching form this position
      const result = getExit(nextPosition);

      // if we find th exit return it
      if (result) {
        return result;
      }

      // no exit found
      return null;
    }
  }
  // move in each direction
  const directions = ["getUpper", "getLeft", "getRight", "getLower"];
  for (const direction in directions) {
    const exitFound = explore(direction);
    if (exitFound) return exitFound;
  }

  // no exit found
  return null;
}
