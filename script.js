portfolio = [
    {
      "name": "Elegant Garden Wedding",
      "picture_link": "event.jpg"
    },
    {
      "name": "Rustic Barn Wedding",
      "picture_link": "event.jpg"
    },
    {
      "name": "Beachfront Sunset Wedding",
      "picture_link": "event.jpg"
    },
    {
      "name": "Vintage Bohemian Wedding",
      "picture_link": "event.jpg"
    },
    {
      "name": "Modern City Rooftop Wedding",
      "picture_link": "event.jpg"
    }
  ]

  venues = [
    {
      "name": "The Grand Ballroom",
      "picture_link": "event.jpg"
    },
    {
      "name": "Seaside Pavilion",
      "picture_link": "event.jpg"
    },
    {
      "name": "Countryside Manor",
      "picture_link": "event.jpg"
    },
    {
      "name": "Historic Castle Grounds",
      "picture_link": "event.jpg"
    },
    {
      "name": "Charming Vineyard Estate",
      "picture_link": "event.jpg"
    }
  ]
 review = [
    {
      "review": "The team made our wedding day absolutely magical! Everything was perfect, from the flowers to the photography.",
      "reviewer_name": "Emily & John"
    },
    {
      "review": "We couldn’t have asked for a more beautiful venue and seamless planning process. Highly recommended!",
      "reviewer_name": "Sarah & Mark"
    },
    {
      "review": "Professional and thoughtful. They made sure every detail was exactly how we wanted it. Fantastic experience!",
      "reviewer_name": "Lisa & David"
    },
    {
      "review": "From start to finish, the experience was flawless. Our guests are still talking about how amazing everything was.",
      "reviewer_name": "Jessica & Brian"
    },
    {
      "review": "Exceeded our expectations in every way. The wedding turned out to be even more beautiful than we imagined.",
      "reviewer_name": "Rachel & Tom"
    }
  ]




    
let portfolioIndex = 0;

function portfolio_turnstile(direction) {
    if (direction == 1) {
        portfolioIndex = (portfolioIndex + 1) % portfolio.length;
    } else if (direction == 0) {
        portfolioIndex = (portfolioIndex - 1 + portfolio.length) % portfolio.length;
    }

    const name = document.getElementById('portfolio_name');
    const picture = document.getElementById('portfolio_image');

    name.textContent = portfolio[portfolioIndex].name;
    picture.src = portfolio[portfolioIndex].picture_link;
}

let venueIndex = 0;

function venue_turnstile(direction) {
    if (direction == 1) {
        venueIndex = (venueIndex + 1) % venues.length;
    } else if (direction == 0) {
        venueIndex = (venueIndex - 1 + venues.length) % venues.length;
    }

    const name = document.getElementById('venue_name');
    const picture = document.getElementById('venue_image');

    name.textContent = venues[venueIndex].name;
    picture.src = venues[venueIndex].picture_link;
}


let reviewIndex = 0;

function review_turnstile(direction) {
    if (direction == 1) {
        reviewIndex = (reviewIndex + 1) % review.length;
    } else if (direction == 0) {
        re = (reviewIndex - 1 + review.length) % review.length;
    }

    const rev = document.getElementById('review_text');
    const name = document.getElementById('reviewer');

    name.textContent = review[reviewIndex].reviewer_name;
    rev.textContent = review[reviewIndex].review;
}






