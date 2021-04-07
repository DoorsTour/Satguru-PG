var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.05250923378656047,
        "pitch": 0.08673719044379169,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -1.3893201240438842,
          "pitch": 0.4351905567880241,
          "rotation": 0,
          "target": "1-room-1"
        },
        {
          "yaw": -0.0696263342431358,
          "pitch": 0.23110975734009287,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": 2.598861664019223,
          "pitch": -0.20427448782731084,
          "rotation": 0,
          "target": "5-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-room-1",
      "name": "Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.9437466535041796,
        "pitch": 0.10600293750812817,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": 2.1105119365800915,
          "pitch": 0.3170390945631638,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5384306046383145,
        "pitch": 0.24719218143127542,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": 0.8548478891738256,
          "pitch": 0.1837906168791541,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": -2.193832397312679,
          "pitch": 0.22074437866301722,
          "rotation": 1.5707963267948966,
          "target": "3-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-room-2",
      "name": "Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.0911798040700145,
        "pitch": 0.2202957187138228,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -0.4312645059054354,
          "pitch": 0.2770344760615657,
          "rotation": 4.71238898038469,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lobby-2",
      "name": "Lobby 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.9944271704678567,
        "pitch": 0.3132541271307048,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": 1.441180803368324,
          "pitch": 0.24910132884837033,
          "rotation": 0,
          "target": "5-floor-1"
        },
        {
          "yaw": -1.2458516655778133,
          "pitch": 0.09428775982526716,
          "rotation": 0,
          "target": "6-room-3"
        },
        {
          "yaw": 2.718582734759825,
          "pitch": 0.16373550520006575,
          "rotation": 4.71238898038469,
          "target": "7-room-4"
        },
        {
          "yaw": -1.424316641601962,
          "pitch": 0.28943124125764896,
          "rotation": 0,
          "target": "8-lobby-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-floor-1",
      "name": "Floor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.49510586866590955,
        "pitch": 0.14410404792822717,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -2.214237281008801,
          "pitch": 0.31855465895760915,
          "rotation": 3.141592653589793,
          "target": "0-entry"
        },
        {
          "yaw": 0.8132109017661975,
          "pitch": 0.22065133337804532,
          "rotation": 0,
          "target": "4-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-room-3",
      "name": "Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.9903787906572283,
        "pitch": 0.15635238470613189,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -2.818073630610453,
          "pitch": 0.12133696799178395,
          "rotation": 0,
          "target": "8-lobby-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-room-4",
      "name": "Room 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.338908108050264,
        "pitch": 0.06015990896533019,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": 0.27444886369891464,
          "pitch": 0.10567187056087768,
          "rotation": 0,
          "target": "4-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lobby-",
      "name": "Lobby ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8577630813678887,
        "pitch": 0.08901026735079753,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": 2.8687063423665142,
          "pitch": 0.11940558590700334,
          "rotation": 0,
          "target": "7-room-4"
        },
        {
          "yaw": -0.07598893451324251,
          "pitch": 0.2454984690770381,
          "rotation": 0,
          "target": "9-room-3"
        },
        {
          "yaw": 2.6936765138920276,
          "pitch": 0.3699639040709073,
          "rotation": 0,
          "target": "4-lobby-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-room-3",
      "name": "Room 3.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8586558193268772,
        "pitch": 0.25380911777747706,
        "fov": 1.1295095994859854
      },
      "linkHotspots": [
        {
          "yaw": -2.887139488214423,
          "pitch": 0.15782612967168852,
          "rotation": 0,
          "target": "8-lobby-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
