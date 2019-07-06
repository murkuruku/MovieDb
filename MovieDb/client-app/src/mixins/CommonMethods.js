// eslint-disable-next-line import/prefer-default-export
export const CommonMethods = {
  methods: {
    selectedObj (selectedObj, allObj) {
      const selected = [];
      for (let i = 0; i < selectedObj.length; i++) {
        if (selectedObj[i].selected === true) {
          for (let j = 0; j < allObj.length; j++) {
            if (selectedObj[i].id === allObj[j].movieId || selectedObj[i].id === allObj[j].actorId) {
              selected.push(allObj[j]);
            }
          }
        }
      }
      return selected;
    },
    select(x, id, objects) {
      for (let i = 0; i < objects.length; i++) {
        if (objects[i].hasOwnProperty('actorId')) {
          x.movieActors.push({
            actorId: objects[i].actorId,
            movieId: 1 + id,
          });
        } else {
          x.movieActors.push({
            actorId: id + 1,
            movieId: objects[i].movieId,
          });
        }
      }
      return x;
    },
    navigation(x) { this.$router.push({ name: x }); },
  }
}

