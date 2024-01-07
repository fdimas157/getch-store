import { useState } from "react";

function Tombol(props) {
  return (
    <button
      onClick={props.pasDiklikBakalNgapain}
      style={{
        backgroundColor: props.warna,
        color: "white",
        borderRadius: 14,
        height: 28,
        paddingInline: 14,
        border: "none",
      }}
    >
      {props.children}
    </button>
  );
}

export default function Pertemuan3() {
  // cara asal usul
  const name = useState("Mas Jokowi");

  // semi umum
  const colorState = useState("red");
  const color = colorState[0];
  const setColor = colorState[1];

  // cara paling umum
  const [age, setAge] = useState(23);

  return (
    <main style={{ backgroundColor: color }}>
      <h1>{name[0]}</h1>
      <h2>Umurnya: {age}</h2>
      <Tombol
        warna="gray"
        pasDiklikBakalNgapain={() => {
          console.log(`Nilai variabel name = ${name[0]}`);
          if (name[0] === "Mas Jokowi") {
            name[1]("Pak Hafiz");
            setAge(54);
            setColor("blue");
          } else {
            name[1]("Mas Jokowi");
            setAge(23);
            setColor("red");
          }
          console.log(`Nilai variabel name = ${name[0]}`);
        }}
      >
        Ganti presiden
      </Tombol>
      <Tombol
        pasDiklikBakalNgapain={() => alert("Baliho dicetak.")}
        warna="blue"
      >
        Cetak baliho
      </Tombol>
      <Tombol
        pasDiklikBakalNgapain={() => alert("Pamflet dicetak.")}
        warna="red"
      >
        Cetak pamflet
      </Tombol>
    </main>
  );
}
