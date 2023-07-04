import React, { useState } from "react";
import "./styles.css";
import Button from "../Button";
import * as math from "mathjs";

const arrOperacoes = ['*', "/", "+", ".", "-"];

export default function App() {
    const [input, setInput] = useState("");
    function insereNum(val) {
        setInput(input + val);
    }
    function insereOperacao(val) {
        if (
            input === "" ||
            (arrOperacoes.includes(input[input.length - 1]) &&
                arrOperacoes.includes(val))
        ) {
            return;
        } else {
            setInput(input + val);
        }
    }

    function calcular() {
        if (input === "" || arrOperacoes.includes(input[input.length - 1])) {
            return input;
        } else {
            setInput(math.evaluate(input));
        }
    }

    return (
        <div className="calc-wrapper">
            <Button isInput>{input}</Button>
            <div className="linha">
                <Button onClick={insereNum}>7</Button>
                <Button onClick={insereNum}>8</Button>
                <Button onClick={insereNum}>9</Button>
                <Button onClick={insereOperacao}>/</Button>
            </div>
            <div className="linha">
                <Button onClick={insereNum}>4</Button>
                <Button onClick={insereNum}>5</Button>
                <Button onClick={insereNum}>6</Button>
                <Button onClick={insereOperacao}>*</Button>
            </div>
            <div className="linha">
                <Button onClick={insereNum}>1</Button>
                <Button onClick={insereNum}>2</Button>
                <Button onClick={insereNum}>3</Button>
                <Button onClick={insereOperacao}>+</Button>
            </div>
            <div className="linha">
                <Button onClick={insereOperacao}>.</Button>
                <Button onClick={insereNum}>0</Button>
                <Button onClick={() => setInput("")}>C</Button>
                <Button onClick={insereOperacao}>-</Button>
            </div>
            <div className="linha">
                <Button onClick={calcular}>=</Button>
            </div>
        </div>
    );
}
