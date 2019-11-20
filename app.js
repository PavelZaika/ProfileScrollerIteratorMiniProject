const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    name: "Bon Loan",
    age: 23,
    gender: "male",
    lookingFor: "female",
    location: "Chicago MA",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Ann Pen",
    age: 22,
    gender: "female",
    lookingFor: "male",
    location: "Seattle WA",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    name: "Alex Palex",
    age: 36,
    gender: "male",
    lookingFor: "female",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  }
];

const profiles = profileIterator(data);


//Call first profile

nextProfile();

//Next event

document.getElementById("next").addEventListener("click", nextProfile);

//Next profile display

function nextProfile() {
  const currentProfile = profiles.next().value;
  
  if (currentProfile !== undefined ) {
  document.getElementById("profileDisplay").innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
    
  </ul>
  `;

  document.getElementById("imageDisplay").innerHTML = `
    <img src="${currentProfile.image}">
  `;
  } else {
    //No more profiles

    window.location.reload();
  }
}

//Profile Iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
