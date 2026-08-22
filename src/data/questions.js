const questions = [
  {
    "id": 1,
    "text": "You find a device that isn't working. What sounds more satisfying?",
    "options": [
      {
        "id": "A",
        "text": "Figure out exactly what caused the problem.",
        "axis": "analytical"
      },
      {
        "id": "B",
        "text": "Take it apart and experiment until you get it working.",
        "axis": "handsOn"
      }
    ]
  },
  {
    "id": 2,
    "text": "You're asked to improve an ordinary app. What would you rather do?",
    "options": [
      {
        "id": "A",
        "text": "Come up with a completely new interface and visual style.",
        "axis": "creative"
      },
      {
        "id": "B",
        "text": "Talk to users and understand what frustrates them.",
        "axis": "people"
      }
    ]
  },
  {
    "id": 3,
    "text": "A teammate is struggling with something. What would you naturally prefer?",
    "options": [
      {
        "id": "A",
        "text": "Sit with them and help them work through it.",
        "axis": "people"
      },
      {
        "id": "B",
        "text": "Try different approaches yourself until you find one that works.",
        "axis": "handsOn"
      }
    ]
  },
  {
    "id": 4,
    "text": "You have a free afternoon and a box of electronic components.",
    "options": [
      {
        "id": "A",
        "text": "Build something with them and see what happens.",
        "axis": "handsOn"
      },
      {
        "id": "B",
        "text": "Research how the components work and figure out the best design first.",
        "axis": "analytical"
      }
    ]
  },
  {
    "id": 5,
    "text": "You receive a large set of data. Which sounds more interesting?",
    "options": [
      {
        "id": "A",
        "text": "Find patterns and figure out what the numbers are telling you.",
        "axis": "analytical"
      },
      {
        "id": "B",
        "text": "Turn the information into an engaging visual story.",
        "axis": "creative"
      }
    ]
  },
  {
    "id": 6,
    "text": "You need to present an idea to people. What would you enjoy more?",
    "options": [
      {
        "id": "A",
        "text": "Design an interesting way to communicate the idea.",
        "axis": "creative"
      },
      {
        "id": "B",
        "text": "Make the presentation interactive and get everyone involved.",
        "axis": "people"
      }
    ]
  },
  {
    "id": 7,
    "text": "You're given responsibility for a group project. What sounds more rewarding?",
    "options": [
      {
        "id": "A",
        "text": "Help everyone work together and keep the group motivated.",
        "axis": "people"
      },
      {
        "id": "B",
        "text": "Personally build the most difficult part of the project.",
        "axis": "handsOn"
      }
    ]
  },
  {
    "id": 8,
    "text": "You get access to a workshop for a day. What would you rather do?",
    "options": [
      {
        "id": "A",
        "text": "Build a physical prototype of an idea.",
        "axis": "handsOn"
      },
      {
        "id": "B",
        "text": "Study existing designs and figure out how to make the prototype better.",
        "axis": "analytical"
      }
    ]
  },
  {
    "id": 9,
    "text": "A system keeps producing unexpected results. What would you rather do?",
    "options": [
      {
        "id": "A",
        "text": "Trace the problem step-by-step until you find the cause.",
        "axis": "analytical"
      },
      {
        "id": "B",
        "text": "Redesign the system and try a completely different approach.",
        "axis": "creative"
      }
    ]
  },
  {
    "id": 10,
    "text": "You have to create something people will remember.",
    "options": [
      {
        "id": "A",
        "text": "Experiment with unusual ideas until something original emerges.",
        "axis": "creative"
      },
      {
        "id": "B",
        "text": "Think about what would emotionally connect with the audience.",
        "axis": "people"
      }
    ]
  },
  {
    "id": 11,
    "text": "You're organizing an event with a difficult group of people.",
    "options": [
      {
        "id": "A",
        "text": "Bring everyone together and make sure their ideas are heard.",
        "axis": "people"
      },
      {
        "id": "B",
        "text": "Take charge of the practical work and make sure everything gets done.",
        "axis": "handsOn"
      }
    ]
  },
  {
    "id": 12,
    "text": "You receive a kit for building a small robot.",
    "options": [
      {
        "id": "A",
        "text": "Start assembling it and learn by experimenting.",
        "axis": "handsOn"
      },
      {
        "id": "B",
        "text": "First understand the mechanics and plan exactly how everything should work.",
        "axis": "analytical"
      }
    ]
  },
  {
    "id": 13,
    "text": "You notice that a business is losing customers. What would you rather do?",
    "options": [
      {
        "id": "A",
        "text": "Analyze the data to identify where customers are dropping off.",
        "axis": "analytical"
      },
      {
        "id": "B",
        "text": "Brainstorm a completely new customer experience.",
        "axis": "creative"
      }
    ]
  },
  {
    "id": 14,
    "text": "You have to redesign a boring website.",
    "options": [
      {
        "id": "A",
        "text": "Create a visually interesting concept that feels completely different.",
        "axis": "creative"
      },
      {
        "id": "B",
        "text": "Talk to different users and design around what they actually need.",
        "axis": "people"
      }
    ]
  },
  {
    "id": 15,
    "text": "Someone asks you for advice about a difficult decision.",
    "options": [
      {
        "id": "A",
        "text": "Listen carefully and help them think through their options.",
        "axis": "people"
      },
      {
        "id": "B",
        "text": "Help them turn the decision into a practical plan and start taking action.",
        "axis": "handsOn"
      }
    ]
  },
  {
    "id": 16,
    "text": "You want to learn a new skill. Which approach sounds better?",
    "options": [
      {
        "id": "A",
        "text": "Learn by doing projects immediately.",
        "axis": "handsOn"
      },
      {
        "id": "B",
        "text": "Understand the underlying concepts before trying anything.",
        "axis": "analytical"
      }
    ]
  },
  {
    "id": 17,
    "text": "You're given a difficult puzzle.",
    "options": [
      {
        "id": "A",
        "text": "Break it into smaller pieces and systematically solve it.",
        "axis": "analytical"
      },
      {
        "id": "B",
        "text": "Try an unusual perspective that nobody else has considered.",
        "axis": "creative"
      }
    ]
  },
  {
    "id": 18,
    "text": "You're launching a new product. Which part sounds more exciting?",
    "options": [
      {
        "id": "A",
        "text": "Come up with the product's identity, story and creative direction.",
        "axis": "creative"
      },
      {
        "id": "B",
        "text": "Understand what different people want and build a message that connects with them.",
        "axis": "people"
      }
    ]
  },
  {
    "id": 19,
    "text": "Your team has two very different opinions about how to proceed.",
    "options": [
      {
        "id": "A",
        "text": "Help them understand each other's perspectives and reach an agreement.",
        "axis": "people"
      },
      {
        "id": "B",
        "text": "Start testing different solutions and see which one actually works.",
        "axis": "handsOn"
      }
    ]
  },
  {
    "id": 20,
    "text": "You have an idea for a useful invention. What do you do first?",
    "options": [
      {
        "id": "A",
        "text": "Start building a rough version to see if it works.",
        "axis": "handsOn"
      },
      {
        "id": "B",
        "text": "Analyze the problem carefully and determine the best technical solution.",
        "axis": "analytical"
      }
    ]
  }
];

export default questions;
