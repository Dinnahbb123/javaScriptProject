console.log("Language Tutor JS loaded!")

const languageFacts = {
    french: "French, an internationally significant Romance language, \
     is spoken by over 300 million people globally, making it the 5th most spoken language after Mandarin,\
      English, Spanish, and Arabic. French is also the 2nd most learned language in the world, after English.\
       French is spoken on all five continents and is an official language in 29 countries. ",
    german: "German, spoken by around 130 million people worldwide, is a major language, especially in Europe. \
    It's the most spoken native language in the EU and an official language in several countries,\
     including Germany, Austria, Switzerland, and Liechtenstein. \
     The language is also known for its unique features like capitalized nouns, and three genders.",
    spanish: "Spanish, the second most spoken language globally with over 500 million speakers, \
      has a rich history and unique characteristics. It's a Romance language, originating from \
      Vulgar Latin, and is known for its phonetic pronunciation and significant influence from Arabic. \
      The language is spoken in 20 countries and is the third most used language on the internet. ",
    swahili: "Swahili, also known as Kiswahili, is a Bantu language primarily spoken in East Africa, \
     with approximately 200 million speakers. It serves as a lingua franca, bridging diverse communities,\
      and has a rich history influenced by Arabic and other languages due to its coastal location and trade. ",
    mandarin: "Mandarin Chinese, also known as Standard Chinese or Putonghua, is the most widely spoken dialect of Chinese, \
     with over 955 million native speakers. It's a tonal language, meaning the meaning of words can change based on tone. \
      Mandarin is the official language of China and Taiwan, and it's also spoken in Singapore and other parts of the world. ",
    arabic: "Arabic, a Semitic language, is the official language of 22 countries and a major language of communication in the Arab world. \
     It's one of the six official languages of the United Nations and the liturgical language of over 1.7 billion Muslims. \
      Arabic has a rich history, with the first continuous Arabic text dating back to 125 CE. \
       It's spoken by approximately 422 million people, making it the fifth most widely spoken language in the world. "

};

document.querySelectorAll('button[data-language]').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-language');
        const fact = languageFacts[lang] || 'No fact available';
        document.getElementById('languageFactBox').textContent = fact;
        
    });

});
const form = document.querySelector('form')
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fname = event.target.elements["firstname"].value;
  const lname = event.target.elements["lastname"].value;

  alert(`Thank you,${fname} ${lname} for your submission!`)
  form.reset();
});

const formEsther = document.getElementById('estherForm')
formEsther.addEventListener('submit', function(event) {
  event.preventDefault();
  const day = event.target.elements["day"].value;
  const time = event.target.elements["time"].value

  alert(`You are all set for ${day} @ ${time}! See you then!`)
  formEsther.reset();
})

