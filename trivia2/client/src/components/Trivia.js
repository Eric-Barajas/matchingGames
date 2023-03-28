import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Trivia = () => {

    const [chosenlevel, setChosenLevel] = useState(null)
    const [chosencategory, setChosenCategory] = useState(null)
    const [words, setWords] = useState(null)


    const handleSubmit = (e) => {
        console.log("test")
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
            params: { level: chosenlevel, area: chosencategory },
            headers: {
                'X-RapidAPI-Key': '3349990788msh388664143710c09p138db8jsn1f85a7af5681',
                'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com'
            }
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setWords(response.data)
        }).catch(err => {
            console.log(err.response.status)
            if (err.response.status === 404) {
                console.log("Mission Failed");
            }
        })
    }
    console.log("hello")

    console.log("hello, " + words && words.quizlist)
    console.log(words.quizlist.quiz)

    return (
        <div className="app">

            <div className="level-selector">
                <h1>Trivia</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Choose the level of difficulty:</label>
                    <select onChange={(e) => setChosenLevel(e.target.value)} name="level" >
                        <option value="1">Level 1</option>
                        <option value="2">Level 2</option>
                        <option value="3">Level 3</option>
                        <option value="4">Level 4</option>
                        <option value="5">Level 5</option>
                        <option value="6">Level 6</option>
                        <option value="7">Level 7</option>
                        <option value="8">Level 8</option>
                        <option value="9">Level 9</option>
                        <option value="10">Level 10</option>
                    </select>
                    {/* <label> Choose your category:</label>
                    <select onChange={(e) => setChosenCategory(e.target.value)} name="category" >
                        <option value="ES">ES (Elementary School)</option>
                        <option value="MS">MS (Middle School)</option>
                        <option value="HS">HS (High School)</option>
                        <option value="KSAT">KSAT</option>
                        <option value="TOEIC">TOEIC</option>
                        <option value="TOEFL">TOEFL</option>
                        <option value="TEPS">TEPS</option>
                        <option value="SAT">SAT</option>
                        <option value="IELTS">IELTS</option>
                        <option value="GRE">GRE</option>
                        <option value="GMAT">GMAT</option>
                        <option value="OVERALL">OVERALL</option>
                    </select>
                    <input type="submit" value="Search" /> */}
                </form>
                <h1>Category</h1>

            </div>

            <div className="show">
                bean = words.quizlist
                <h1>Category</h1>
                <h3>Find the word most like these 3:  </h3>

                <p> words.quizlist.1.quiz </p>
                <p> </p>
            </div>

        </div>
    )
}

export default Trivia