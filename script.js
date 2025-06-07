

     const familyColors = {
        A: "lightblue",
        B: "lightgreen",
        C: "lavender",
        D: "lightcoral",
        E: "",
        F: ""
      };

    const familyTree = {
       id:1,
      name: "Євдокія",
      secondName: "Хоцька",
      gender: "female",
      birth: 1907,
      photo: "images/prababa.jpg",
      personalInfo: {
      bio: "Микола працював механіком...",
      
    },
  
  spouse: {
    id: 2,
    name: "Іван",
    secondName: "Антоненко",
    gender: "male",
    birth: 1910,
    photo: "images/praded.jpg",
    personalInfo: {
      bio: "Микола працював механіком...",
     
    }
  },
  
      id:3,
      name: "Горпина",
      secondName: "Бердник",
      gender: "female",
      birth: 1912,
      photo: "images/Gorpuna.jpg",
      personalInfo: {
      bio: "Все життя пропрацювала в колгоспі, була не писемна...",
      
    },
  
  spouse: {
    id:4,
    name: "Микола",
    secondName: "Бердник",
    gender: "male",
    birth: 1912.1944,
    photo: "images/Berdnuk.jpg",
    personalInfo: {
      bio: "Микола працював механіком, був трактористом...",
      
    }
  },
  children: [
    {
      id:5,
      name: "Лідія",
      secondName: "Антоненко",
      birth: 1938,
      photo: "images/Li.jpg",
      personalInfo: {
      bio: "Лідія Миколаївна викладала біологію і хімію, була класним керівником...",
      
    },
      spouse: {
        id:6,
        name: "Микола",
        secondName: "Антоненко",
        gender: "male",
        birth: 1932,
        photo: "images/Antonenko.jpg",
        personalInfo: {
            bio: "Микола працював директором школи...",
           
    }
      },
      children: [
        {
          id:7,
          name: "Люба",
          secondName: "Димура",
          gender: "female",
          birth: 1958,
          photo: "images/Luba.jpg",
          familyId: "A",
          personalInfo: {
            bio: "Працювала в куколівській школі...",
           
    },
          id: 8,
          spouse: {
            name: "Віктор",
            secondName: "Димура",
            birth: 1969,
            photo: "images/Viktor.jpg",
            personalInfo: {
              bio: "Віктор працював електриком у колгоспі, потім став фермером...",
             
    }

          },
          children: [
            { 
              id:9,
              name: "Яна", 
              secondName: "Димура", 
              gender: "female", 
              birth: 1984, 
              photo: "images/Yana.jpg", 
              familyId: "A",
              personalInfo: {
                bio: "Яна народилася в селі Куколівка, працювала в Олександрії <br />спочатку в школі№1, потім в Індустріальному Технікумі, викладає математику...",
               
              }, 
      spouse: {
             id:10,
             name: "Олег",
             secondName: "Безверхий",
             birth: 1981,
             photo: "images/Oleg.jpg",
             personalInfo: {
               bio: "Зараз військовий...",
               }
             }
  },
             {
              id:11,
              name: "Микола", 
              secondName: "Димура", 
              gender: "male", 
              birth: 1991, 
              photo: "images/Nikola.jpg",
              familyId: "A", 
              personalInfo: {
                bio: "Микола працює розробником...",
                
              },
               spouse: {
             id:25,
             name: "Мар'яна",             
             secondName: "Димура",
             birth: 1996,
             photo: "images/Marjana.jpg",
             personalInfo: {
               bio: "Зараз в Казахстаны...",
                }
             }
  }, 
          ]
        },
        {
          id:12,
          name:"Вера",
          secondName: "Шеремет",
          gender: "female",
          birth: 1960,
          photo: "images/Verchik.jpg",
          familyId: "B", 
          personalInfo: {
              bio: "Працювала в дитсадку, переїхала в село, догляда Лідію Миколаївну...",
             
    },
          spouse: {
            id:13,
            name: "Володимир",
            secondName: "Шеремет",
            birth: 1960,
            photo: "https://i.pravatar.cc/60?u=4",
            personalInfo: {
          bio: "",
          hobbies: []
    }
          },
          children: [
            {
              id:14,
              name: "Віталій",
              secondName: "Шеремет",
              gender: "male",
              birth: 1982,
              photo: "images/Vitalii.jpg",
              familyId: "B", 
              personalInfo: {
                bio: "Віталій ...",
               
    },
              spouse: {
                id:15,
                name: "Таня",
                secondName: "Шеремет",
                birth: 1987,
                photo: "images/Tanya.jpg",
                personalInfo: {
                  bio: "Таня працює бухгалтером...",
                 
    }
              },
              children: [
                { id:16, name: "Женя", secondName: "Шеремет", gender: "male", birth: 2024, photo: "images/Zhenya.jpg", className: "highlight-purple" },
                { id:17, name: "Ніна", secondName: "Шеремет", gender: "female", birth: 2018, photo: "images/Nina.jpg", className: "highlight-purple"}
              ]
            },
            { 
              id:18,
              name: "Володимир",
              secondName: "Шеремет",
              gender: "male",
              birth: 1986,
              photo: "images/Volodya.jpg",
              familyId: "B", 
              personalInfo: {
                bio: "Володимир переїхав у Либидин до дружини,<br /> працює на насіневому заводі...",
           
    },
               spouse: {
                id:19,
                name: "Інна",
                birth: 1986,
                photo: "images/Inna.jpg",
                familyId: "B", 
                personalInfo: {
                    bio: "Інна працює в поліціі...",
                  }
                   
                
               },
               children: [
                 { id:20, name: "Вікторія", secondName: "Шеремет", gender: "female", birth: 2011, photo: "images/Viktoriya.jpg" }
               ]
             },
             {
              id:21,
              name: "Вікторія",
              secondName: "Лишенко",
              gender: "female",
              birth: 1991,
              photo: "images/Vika.jpg",
              familyId: "B", 
              personalInfo: {
                bio: "Вікторія вийшла заміж і переїхала в Буринь, працює на молокозаводі...",
        
              },
              spouse: {
                id:22,
                name: "Олександр",
                secondName: "Лишенко",
                birth: 1991,
                photo: "images/Sashko.jpg",
                personalInfo: {
                  bio: "Працює ветеринаром...",
                  }
              },
              children: [
                { id:23, name: "Іван", secondName: "Лишенко", gender: "male", birth: 2015, photo: "images/Ivan.jpg" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

   

function createCard(person) {
  const div = document.createElement("div");
  div.className = "person";
  div.id = `person-${person.id}`;

  // Застосовуємо колір за сім’єю
  if (person.familyId && familyColors[person.familyId]) {
    div.style.backgroundColor = familyColors[person.familyId];
  }

  if (person) {
    div.classList.add("family");
    div.innerHTML = `
      <div class="partner">
        <img src="${person.photo}" alt="${person.name}" /><br />
        <strong>${person.name}</strong><br />
        <small>${person.secondName || ""}</small><br />
        <strong>${person.birth}</strong><br />
      </div>
    
    `;
  } else {
    div.innerHTML = `
      <img src="${person.photo}" alt="${person.name}" /><br />
      <strong>${person.name}</strong><br />
      <small>${person.secondName || ""}</small>
    `;
  }

  div.onclick = () => showModal(person);
  return div;
}

   function showModal(person) {
      const body = document.getElementById("modal-body");
      body.innerHTML = `
        <h2>${person.name} ${person.secondName || ""}</h2>
        <img src="${person.photo}" alt="${person.name}" /><br/>
        <p><strong> ${person.birth}</strong></p>
        ${person.personalInfo?.bio ? `<p><strong>Про себе:</strong> ${person.personalInfo.bio}</p>` : ""}
        ${person.personalInfo?.notes ? `<p><strong>Примітки:</strong> ${person.personalInfo.notes}</p>` : ""}

         <h2>${person.spouse.name} ${person.spouse.secondName || ""}</h2>
        <img src="${person.spouse.photo}" alt="${person.spouse.name}" /><br/>
        <p><strong></strong> ${person.spouse.birth}</p>
        ${person.spouse.personalInfo?.bio ? `<p><strong>Про себе:</strong> ${person.spouse.personalInfo.bio}</p>` : ""}
        ${person.spouse.personalInfo?.notes ? `<p><strong>Примітки:</strong> ${person.spouse.personalInfo.notes}</p>` : ""}
      `;
      document.getElementById("modal").style.display = "block";
      document.getElementById("modal-overlay").style.display = "block";
    }

    function closeModal() {
      document.getElementById("modal").style.display = "none";
      document.getElementById("modal-overlay").style.display = "none";
    }

    function renderTree(person, container, generation = 0) {
      let genDiv = document.getElementById(`gen-${generation}`);
      if (!genDiv) {
        genDiv = document.createElement("div");
        genDiv.className = "generation";
        genDiv.id = `gen-${generation}`;
        container.appendChild(genDiv);
      }

      const card = createCard(person);
      genDiv.appendChild(card);

      // if (person.spouse) {
      //   const spouseCard = createCard(person.spouse);
      //   genDiv.appendChild(spouseCard);
      // }

      if (person.children && person.children.length > 0) {
        person.children.forEach(child => renderTree(child, container, generation + 1));
      }
    }
     

    renderTree(familyTree, document.getElementById("tree"));
  