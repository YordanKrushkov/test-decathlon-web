import './index.scss';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import img from '../../Assets/images/weights.jpg'
import barbel from '../../Assets/images/barbel.jpg'
import { useState, useEffect } from 'react';
const SecondaryContainer = () => {

    const [changed, setChanded] = useState(false)
    const [items, setItems] = useState([
        {
            img: img,
            title: "Weight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },

        {
            img: barbel,
            title: "Barbells",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: img,
            title: "NEW",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: barbel,
            title: "Barbells",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: img,
            title: "Weight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: barbel,
            title: "Barbells",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: img,
            title: "Weight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
    ])
    const moveRight = () => {
        let arr = items;
        let el = arr.shift();
        arr.push(el)

        setItems(arr);
        setChanded(!changed)
    }
    const moveLeft = () => {
        let arr = items;
        let el = arr.pop();
        arr.unshift(el)

        setItems(arr);
        setChanded(!changed)
    }
    useEffect(() => {

    }, [changed])

    return (
        <div id="secondaryContaner">
            <h1>Most Searched Products</h1>

            <div>
                <span onClick={ moveLeft }><MdKeyboardArrowLeft /></span>
                <div>
                    { items.map(x =>
                        <section>
                            <img src={ x.img } alt="" />
                            <h5>{ x.title }</h5>
                            <p>{ x.description }</p>
                            <a href="">See more <MdKeyboardArrowRight /></a>
                        </section>
                    ) }
                </div>
                <span onClick={ moveRight }><MdKeyboardArrowRight /></span>
            </div>
        </div>
    );
}

export default SecondaryContainer;