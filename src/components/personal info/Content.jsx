import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fifthColour: {back: '', text: ''},
      sixthColour: {back: '', text: ''}
    };
  }

  findRandomColour() {
    const letters ="0123456789ABCDEF";
    let color = '';
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random()*16)];
    }
    return `#${color}`;
  };

  render() {
    return (
      <div>
        <p>Місце народження: 14 травня, 2003 року, м. Маріуполь</p>
        <p>Освіта: НВК "Гімназія-школа" № 27, м. Маріуполь; НТУУ "КПІ" м. Київ</p>

        <p>Хобі:</p>
        <ul style={{backgroundColor: this.state.fifthColour.back, color: this.state.fifthColour.text}} onClick={() => this.setState({fifthColour: {back: this.findRandomColour(), text: this.findRandomColour()}})}>
          <li>Кондитерське мистецтво</li>
          <li>Читання книжок</li>
          <li>Комп'ютерні ігри</li>
          <li>Спорт</li>
        </ul>
        
        <p style={{backgroundColor: this.state.sixthColour.back, color: this.state.sixthColour.text}} onClick={() => this.setState({sixthColour: {back: this.findRandomColour(), text: this.findRandomColour()}})}>Улюблені книги:</p>
        <ol>
          <li>"Тривожні люди"</li>
          <li>"Там, де співають раки"</li>
          <li>"Не озирайся і мовчи"</li>
          <li>"Макова війна"</li>
        </ol>

        <p><strong>Маріу́поль</strong> — місто в Україні. Лежить у Донецькій області на березі Азовського моря, у гирлі річки Кальміусу. Населення — 431 859 мешканці (2021). <br/> Значний порт і промисловий центр країни. У місті діють два великі металургійні комбінати (Маріупольський металургійний комбінат імені Ілліча та «Азовсталь»), продукція яких складає значну частину експорту України. У промисловості Донецької області частка Маріуполя — 37,5 %, в Україні — близько 7 %. Район компактного розселення греків Приазов'я. Кліматичний і грязьовий курорт.
          Під час російського вторгнення в Україну місто практично повністю було знищене збройними силами росії. З 20 травня 2022 місто перебуває під повною окупацією.
        </p>
      </div>
    )
  }
}

export default Content;