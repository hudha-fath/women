const knowledgeBase = {
  dowry: "Dowry Prohibition Act, 1961 makes dowry illegal. Punishment: up to 5 years imprisonment + fine.",
  domestic_violence: "Protection of Women from Domestic Violence Act, 2005 covers physical, emotional, sexual, verbal, and economic abuse.",
  posh: "POSH Act, 2013 mandates Internal Complaints Committees in workplaces to address sexual harassment.",
  cybercrime: "IT Act, 2000 covers hacking, identity theft, cyberstalking, and online harassment. Cybercrime helpline: 1930.",
  marriage: "Special Marriage Act, 1954 allows interfaith marriages. Legal age: 21 for men, 18 for women.",
  divorce: "Section 125 CrPC allows wives and children to claim maintenance. Divorce grounds include cruelty, desertion, adultery.",
  helplines: "Women Helpline: 1091, National Helpline: 181, Police: 100/112, NCW Helpline: 14490, Cybercrime: 1930."
};

function sendMessage() {
  const input = document.getElementById("input").value.toLowerCase();
  const chatbox = document.getElementById("chatbox");

  chatbox.innerHTML += `<div class="user">You: ${input}</div>`;

  let response = "Sorry, I don't have information on that. Try keywords like dowry, domestic violence, posh, cybercrime, marriage, divorce, helplines.";

  if (input.includes("dowry")) response = knowledgeBase.dowry;
  else if (input.includes("violence")) response = knowledgeBase.domestic_violence;
  else if (input.includes("harassment") || input.includes("posh")) response = knowledgeBase.posh;
  else if (input.includes("cyber")) response = knowledgeBase.cybercrime;
  else if (input.includes("marriage")) response = knowledgeBase.marriage;
  else if (input.includes("divorce") || input.includes("maintenance")) response = knowledgeBase.divorce;
  else if (input.includes("helpline")) response = knowledgeBase.helplines;

  chatbox.innerHTML += `<div class="bot">Bot: ${response}</div>`;
  document.getElementById("input").value = "";
}