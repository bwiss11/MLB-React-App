import { useState } from "react";

// Converts full team name to abbreviation
function teamAbbreviator(fullName) {
  const teamMap = new Map([
    ["New York Yankees", "NYY"],
    ["Boston Red Sox", "BOS"],
    ["Tampa Bay Rays", "TB"],
    ["Baltimore Orioles", "BAL"],
    ["Toronto Blue Jays", "TOR"],
    ["Kansas City Royals", "KC"],
    ["Chicago White Sox", "CWS"],
    ["Minnesota Twins", "MIN"],
    ["Cleveland Guardians", "CLE"],
    ["Cleveland Indians", "CLE"],
    ["Detroit Tigers", "DET"],
    ["Houston Astros", "HOU"],
    ["Los Angeles Angels", "LAA"],
    ["Texas Rangers", "TEX"],
    ["Seattle Mariners", "SEA"],
    ["Oakland Athletics", "OAK"],
    ["Atlanta Braves", "ATL"],
    ["Philadelphia Phillies", "PHI"],
    ["Miami Marlins", "MIA"],
    ["New York Mets", "NYM"],
    ["Washington Nationals", "WAS"],
    ["Milwaukee Brewers", "MIL"],
    ["Chicago Cubs", "CHC"],
    ["Cincinnati Reds", "CIN"],
    ["Pittsburgh Pirates", "PIT"],
    ["St. Louis Cardinals", "STL"],
    ["Los Angeles Dodgers", "LAD"],
    ["Arizona Diamondbacks", "ARI"],
    ["San Diego Padres", "SD"],
    ["San Francisco Giants", "SF"],
    ["Colorado Rockies", "COL"],
    ["Multiple", "MULT"],
  ]);
  if (teamMap.get(fullName)) {
    return teamMap.get(fullName);
  } else {
    return "Total";
  }
}

const hitters = [
  "Ronald Acuna Jr.",
  "Mookie Betts",
  "Freddie Freeman",
  "Matt Olson",
  "Corey Seager",
  "Juan Soto",
  "Shohei Ohtani",
  "Julio Rodriguez",
  "Corbin Carroll",
  "Marcus Semien",
  "J.P. Crawford",
  "Francisco Lindor",
  "Kyle Tucker",
  "Yandy Diaz",
  "Jose Ramirez",
  "Austin Riley",
  "Bobby Witt Jr.",
  "Aaron Judge",
  "Xander Bogaerts",
  "Gunnar Henderson",
  "Ketel Marte",
  "Ozzie Albies",
  "Luis Arraez",
  "Yordan Alvarez",
  "Brandon Nimmo",
  "Trea Turner",
  "Adley Rutschman",
  "Bo Bichette",
  "Luis Robert Jr.",
  "Rafael Devers",
  "Alex Bregman",
  "Isaac Paredes",
  "William Contreras",
  "Ha-Seong Kim",
  "Cody Bellinger",
  "Jose Altuve",
  "Christian Yelich",
  "Wander Franco",
  "TJ Friedl",
  "Bryson Stott",
  "Nico Hoerner",
  "Bryce Harper",
  "Adolis Garcia",
  "Willson Contreras",
  "Cal Raleigh",
  "Brandon Marsh",
  "Spencer Steer",
  "Will Smith",
  "Marcell Ozuna",
  "Josh Lowe",
  "Paul Goldschmidt",
  "Manny Machado",
  "Mike Trout",
  "Nolan Arenado",
  "Andres Gimenez",
  "J.T. Realmuto",
  "Carlos Correa",
  "Jeff McNeil",
  "Dansby Swanson",
  "Pete Alonso",
  "George Springer",
  "Michael Harris II",
  "Nathaniel Lowe",
  "Tommy Edman",
  "Bryan Reynolds",
  "Jake Cronenworth",
  "Eugenio Suarez",
  "Jose Abreu",
  "Taylor Ward",
  "Steven Kwan",
  "Sean Murphy",
  "Amed Rosario",
  "Vladimir Guerrero Jr.",
  "Kyle Schwarber",
  "Alejandro Kirk",
  "Elvis Andrus",
  "Fernando Tatis Jr.",
  "Cedric Mullins",
  "Brandon Lowe",
  "Brandon Crawford",
  "Tyler O'Neill",
  "Starling Marte",
  "Jorge Polanco",
  "Salvador Perez",
  "Tim Anderson",
  "Max Muncy",
  "Buster Posey",
  "Ty France",
  "Willy Adames",
  "Jeimer Candelario",
  "Teoscar Hernandez",
  "Nick Castellanos",
  "Javier Baez",
  "Jonathan India",
  "Justin Turner",
  "Yasmani Grandal",
  "Mike Zunino",
  "Kris Bryant",
  "DJ LeMahieu",
  "Mike Yastrzemski",
  "Anthony Rendon",
  "Michael Conforto",
  "Dominic Smith",
  "Brandon Belt",
  "Cavan Biggio",
  "Luke Voit",
  "Wil Myers",
  "Ronald Acuna Jr.",
  "Trevor Story",
  "Nelson Cruz",
  "Donovan Solano",
  "Eloy Jimenez",
  "Kyle Lewis",
  "Trent Grisham",
  "Austin Nola",
  "Ke'Bryan Hayes",
  "Jose Iglesias",
  "Jackie Bradley Jr.",
  "Chris Taylor",
  "Clint Frazier",
  "Brian Anderson",
  "Miguel Rojas",
  "Mark Canha",
  "Yoan Moncada",
  "Jonathan Villar",
  "Matt Chapman",
  "Josh Donaldson",
  "Carlos Santana",
  "Gleyber Torres",
  "Austin Meadows",
  "Jorge Soler",
  "Trey Mancini",
  "Mitch Garver",
  "J.D. Martinez",
  "Anthony Rizzo",
  "Ramon Laureano",
  "Gio Urshela",
  "Kevin Newman",
  "Mitch Haniger",
  "Aaron Hicks",
  "Lorenzo Cain",
  "Jed Lowrie",
  "Matt Carpenter",
  "Miguel Andujar",
  "Whit Merrifield",
  "Scooter Gennett",
  "Didi Gregorius",
  "Andrew Benintendi",
  "Andrelton Simmons",
  "Michael Brantley",
  "Jean Segura",
  "Joey Wendle",
  "Justin Upton",
  "Tommy Pham",
  "Giancarlo Stanton",
  "Charlie Blackmon",
  "Joey Votto",
  "Jonathan Schoop",
  "Brian Dozier",
  "Eric Hosmer",
  "Zack Cozart",
  "Marwin Gonzalez",
  "Avisail Garcia",
  "Daniel Murphy",
  "Gary Sanchez",
  "Josh Reddick",
  "Khris Davis",
  "Adam Jones",
  "Andrew McCutchen",
  "Travis Shaw",
  "Logan Morrison",
  "Robinson Cano",
  "Miguel Cabrera",
  "Kyle Seager",
  "David Ortiz",
  "Adrian Beltre",
  "Ian Kinsler",
  "Evan Longoria",
  "Dustin Pedroia",
  "Ben Zobrist",
  "Dexter Fowler",
  "Adam Eaton",
  "Jonathan Lucroy",
  "Aledmys Diaz",
  "Ryan Braun",
  "Odubel Herrera",
  "Edwin Encarnacion",
  "Jason Kipnis",
  "Todd Frazier",
  "AJ Pollock",
  "Jose Bautista",
  "Chris Davis",
  "Yoenis Cespedes",
  "Shin-Soo Choo",
  "Logan Forsythe",
  "Mike Moustakas",
  "David Peralta",
  "Curtis Granderson",
  "Matt Duffy",
  "Jason Heyward",
  "Jung Ho Kang",
  "Russell Martin",
  "Dee Strange-Gordon",
  "Francisco Cervelli",
];

const pitchers = [
  "Gerrit Cole",
  "Blake Snell",
  "Logan Webb",
  "Sonny Gray",
  "Kyle Bradish",
  "Kodai Senga",
  "Zac Gallen",
  "Zack Wheeler",
  "Jordan Montgomery",
  "Jesus Luzardo",
  "Shohei Ohtani",
  "George Kirby",
  "Merrill Kelly",
  "Braxton Garrett",
  "Justin Steele",
  "Clayton Kershaw",
  "Tanner Scott",
  "Corbin Burnes",
  "Tanner Bibee",
  "Zach Eflin",
  "Justin Verlander",
  "Eduardo Rodriguez",
  "Kevin Gausman",
  "Sandy Alcantara",
  "Spencer Strider",
  "Luis Castillo",
  "Pablo Lopez",
  "Mike Clevinger",
  "Michael King",
  "Max Scherzer",
  "Chris Martin",
  "Josiah Gray",
  "Charlie Morton",
  "Dylan Cease",
  "Aaron Nola",
  "Alek Manoah",
  "Max Fried",
  "Carlos Rodon",
  "Martin Perez",
  "Julio Urias",
  "Tony Gonsolin",
  "Yu Darvish",
  "Brady Singer",
  "Tyler Anderson",
  "Nestor Cortes",
  "Triston McKenzie",
  "Shane McClanahan",
  "Daniel Bard",
  "Cristian Javier",
  "Framber Valdez",
  "Jeffrey Springs",
  "Kyle Wright",
  "Shane Bieber",
  "Walker Buehler",
  "Robbie Ray",
  "Wade Miley",
  "Gerrit Cole",
  "Brandon Woodruff",
  "Ranger Suarez",
  "Lance Lynn",
  "Tyler Mahle",
  "Nathan Eovaldi",
  "Jacob deGrom",
  "Lucas Giolito",
  "Anthony DeSclafani",
  "Chris Bassitt",
  "Freddy Peralta",
  "John Means",
  "Cal Quantrill",
  "Frankie Montas",
  "Kyle Gibson",
  "Hyun Jin Ryu",
  "Antonio Senzatela",
  "Trevor Bauer",
  "Dinelson Lamet",
  "Kyle Freeland",
  "Zach Plesac",
  "Dallas Keuchel",
  "Kyle Hendricks",
  "Dylan Bundy",
  "Patrick Corbin",
  "German Marquez",
  "Brad Keller",
  "Zach Davies",
  "Carlos Carrasco",
  "Kenta Maeda",
  "Mike Minor",
  "Stephen Strasburg",
  "Jack Flaherty",
  "Michael Soroka",
  "Zack Greinke",
  "Jon Gray",
  "Marcus Stroman",
  "Anibal Sanchez",
  "Jake Odorizzi",
  "Matthew Boyd",
  "Liam Hendriks",
  "Chris Sale",
  "Corey Kluber",
  "Luis Severino",
  "Jameson Taillon",
  "David Price",
  "Blake Treinen",
  "Miles Mikolas",
  "Noah Syndergaard",
  "Jose Berrios",
  "Mike Foltynewicz",
  "Trevor Williams",
  "Cole Hamels",
  "Mike Fiers",
  "Gio Gonzalez",
  "Ervin Santana",
  "Andrew Cashner",
  "Zack Godley",
  "Chase Anderson",
  "Drew Pomeranz",
  "James Paxton",
  "Jason Vargas",
  "Archie Bradley",
  "Corey Knebel",
  "Craig Kimbrel",
  "Michael Fulmer",
  "J.A. Happ",
  "Alex Wood",
  "Jimmy Nelson",
  "Johnny Cueto",
  "Tanner Roark",
  "Masahiro Tanaka",
  "Carlos Martinez",
  "Jon Lester",
  "Jose Quintana",
  "Rick Porcello",
  "Madison Bumgarner",
  "Julio Teheran",
  "Aaron Sanchez",
  "Zack Britton",
  "Dan Straily",
  "Jose Fernandez",
  "Danny Duffy",
  "Rich Hill",
  "Chris Tillman",
  "Ian Kennedy",
  "Jake Arrieta",
  "John Lackey",
  "Felix Hernandez",
  "Matt Harvey",
  "Chris Archer",
  "Yovani Gallardo",
  "Jaime Garcia",
  "Wei-Yin Chen",
  "Dellin Betances",
  "Shelby Miller",
  "Marco Estrada",
  "Wade Davis",
  "Jordan Zimmermann",
];

const players = hitters.concat(pitchers);

function randomPlayerGenerator(players) {
  let randomPlayer =
    players[Math.floor(Math.floor(Math.random() * players.length))];
  console.log("random player is", randomPlayer);
  return randomPlayer.split(" ");
}

// Gets the player's information and year, returns all players from that year
async function fetchData(firstName, lastName) {
  const inputFirstName = firstName;
  const inputLastName = lastName;
  const searchYear = 2022; //document.getElementById('year-dropdown').value;
  async function getPlayers(year) {
    let response = await fetch(
      "https://statsapi.mlb.com/api/v1/sports/1/players?season=" + year
    );
    let data = await response.json();
    return data.people;
  }

  // Assigns list of all the players to a variable
  let players = await getPlayers(searchYear);

  // Creates two dictionaries, one for going from player ID to their name and vice versa
  var idToNameDict = new Object();
  var nameToIdDict = new Object();

  // First fills out dict from id:name (doing name:id first missed a few entries for some reason)
  for (let i = 0; i < players.length; i++) {
    idToNameDict[players[i].id] = players[i].fullName
      .replace("í", "i")
      .replace("é", "e")
      .replace("á", "a");
  }

  // Fills out dictionary for going from name to player ID
  for (const [key, value] of Object.entries(idToNameDict)) {
    nameToIdDict[value] = key;
  }

  // Gets the player's information
  let inputPlayer = inputFirstName + " " + inputLastName;
  let playerId = nameToIdDict[inputPlayer];
  async function getPlayerInfo() {
    let response = await fetch(
      "https://statsapi.mlb.com/api/v1/people?personIds=" +
        playerId +
        "&hydrate=stats(group=[batting],type=[yearByYear])"
    );
    let data = await response.json();
    return data.people[0];
  }
  let playerStats = await getPlayerInfo();

  //   Gets player data to be displayed next to headshot
  let name = playerStats.fullName;
  let position = playerStats.primaryPosition.abbreviation;
  let team = playerStats.stats[0].splits.slice(-1)[0].team.name;

  let number = playerStats.primaryNumber;

  let teamsDict = {
    "Arizona Diamondbacks": "29",
    "Atlanta Braves": "15",
    "Baltimore Orioles": "1",
    "Boston Red Sox": "2",
    "Chicago Cubs": "16",
    "Chicago White Sox": "4",
    "Cincinnati Reds": "17",
    "Cleveland Guardians": "5",
    "Colorado Rockies": "27",
    "Detroit Tigers": "6",
    "Houston Astros": "18",
    "Kansas City Royals": "7",
    "Los Angeles Angels": "3",
    "Los Angeles Dodgers": "19",
    "Miami Marlins": "28",
    "Milwaukee Brewers": "8",
    "Minnesota Twins": "9",
    "New York Mets": "21",
    "New York Yankees": "10",
    "Oakland Athletics": "11",
    "Philadelphia Phillies": "22",
    "Pittsburgh Pirates": "23",
    "San Diego Padres": "25",
    "San Francisco Giants": "26",
    "Seattle Mariners": "12",
    "St. Louis Cardinals": "24",
    "Tampa Bay Rays": "30",
    "Texas Rangers": "13",
    "Toronto Blue Jays": "14",
    "Washington Nationals": "20",
  };

  // Gets player's team's ESPN API number from teamsDict
  let teamNumber = teamsDict[team];

  // Retrieves the roster of the player's team from ESPN's API
  async function getTeam() {
    let response = await fetch(
      "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/teams/" +
        teamNumber +
        "?enable=roster"
    );
    let data = await response.json();
    return data;
  }

  // Assigns the player's team's roster to a variable and establishes variable to hold link to player's headshot
  let teamRoster = await getTeam();
  var playerPic = "";

  let espnInputPlayer = inputPlayer
    .replace("í", "i")
    .replace("é", "e")
    .replace("á", "a");

  // Goes through list of team's players and finds the headshot for the player whose name matches the input, assigns the headshot to be dynamically displayed on the Results page
  async function getHeadshot() {
    let playerPic = "";
    let response = await fetch(
      "https://sports.core.api.espn.com/v3/sports/baseball/mlb/athletes?limit=18000"
    );
    let data = await response.json();

    for (let i = 0; i < data.count; i++) {
      if (data.items[i].fullName == espnInputPlayer) {
        playerId = data.items[i].id;
        break;
      }
    }

    if (playerId) {
      playerPic =
        "https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/" +
        playerId +
        ".png&w=350&h=254";
    }

    return playerPic;
  }

  let headshot = await getHeadshot();

  return [
    playerStats.stats[0].splits,
    headshot,
    playerStats.stats[0].group.displayName,
  ];
}

// function handleInput(value, setInput) {
//   setInput(value);
// }

export { randomPlayerGenerator, teamAbbreviator, fetchData, players };
