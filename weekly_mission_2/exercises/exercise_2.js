const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   explorers.forEach(element => {
       console.log(element.name);
       console.log(element.stack);
   });

   const exploreStack = explorers.map((exp) => exp.stack)
   console.log(exploreStack);

   console.log(explorers.filter((explorer) => explorer.stack.includes('js')));

   console.log(explorers.find((explorer) => explorer.city === "CDMX"));

   console.log(explorers.reduce((a, b) => a + b.exercises_completed, 0))

   console.log(explorers.some((explorer) => explorer.missions.frontend.exercisesFinished))

   console.log(explorers.every((explorer) => explorer.missions.onboarding.exercisesFinished))



