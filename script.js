const artists = [
    {
      name: "Винсент Ван Гог",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Vincent_Willem_van_Gogh_128.jpg/220px-Vincent_Willem_van_Gogh_128.jpg",
      painting: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      bio: "Винсент ван Гог — нидерландский постимпрессионист, оказавший огромное влияние на искусство XX века."
    },
    {
      name: "Клод Моне",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Claude_Monet_1899_Nadar_crop.jpg/220px-Claude_Monet_1899_Nadar_crop.jpg",
      painting: "https://upload.wikimedia.org/wikipedia/commons/0/08/Claude_Monet_-_Impression%2C_Sunrise_-_Google_Art_Project.jpg",
      bio: "Клод Моне — французский художник, один из основателей импрессионизма в живописи."
    },
    {
      name: "Леонардо да Винчи",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/220px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg",
      painting: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      bio: "Леонардо да Винчи — итальянский художник, ученый и изобретатель эпохи Ренессанса, автор 'Моны Лизы'."
    }
  ];
  
  const gallery = document.getElementById("gallery");
  
  artists.forEach(artist => {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <img src="${artist.painting}" alt="${artist.name}" />
      <div class="card-content">
        <h3>${artist.name}</h3>
        <p>${artist.bio}</p>
      </div>
    `;
  
    gallery.appendChild(card);
  });
  