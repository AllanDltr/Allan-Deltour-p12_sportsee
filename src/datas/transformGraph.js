//ObjectiveCharts - Average Sessions Length
export const transformDataObjectiveGraph = (data) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"]
    const sessions = data.sessions.map((session) => {
        return {
            name:days[session.day - 1],
            sessionLength: session.sessionLength,
        }});
        return sessions
    };

//Radar - User Performance in 6 Categories
export const transformDataRadarGraph = (data) => {
    const Kind = ['Cardio','Energie','Endurance','Force','Vitesse','Intensité'];
    const arrayData = data.data.map(({value, kind}) => {
        return {
            value: value,
            kind: Kind[kind-1],
        };
    });
    return arrayData;
};

//Weightbar - Weight and Calories everyday
export const transformDataWeightbarGraph = (data) => {
    const arrayData = data.sessions.map(({ kilogram, calories }, index) => {
      return {
        kilogram: kilogram,
        calories: calories,
        day: (index + 1).toString(),
      };
    });
    return arrayData;
  };