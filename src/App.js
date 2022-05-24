import React from 'react';
import './App.css';
import logo from './assets/logo.png'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Feed from './app/pages/feed';
import placeholder from './assets/placeholder.jpeg'
import Article from './app/pages/article';

function App() {
  const posts = [
    {
      id: 1,
      header: "Jeff Bezos Annouces Retirement",
      votes: 1000,
      text: "In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n&quot;;",
      author: "John Smith",
      img: placeholder
    },
    {
      id: 2,
      header: "Jeff Bezos Annouces Retirement",
      votes: 1000,
      text: "&quot;In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n&quot;;",
      author: "John Smith",
      img: placeholder
    },
    {
      id: 3,
      header: "Jeff Bezos Annouces Retirement",
      votes: 1000,
      text: "&quot;In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n&quot;;",
      author: "John Smith",
      img: placeholder
    },
    {
      id: 4,
      header: "Jeff Bezos Annouces Retirement",
      votes: 1000,
      text: "&quot;In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n&quot;;",
      author: "John Smith",
      img: placeholder
    },
    {
      id: 5,
      header: "Jeff Bezos Annouces Retirement",
      votes: 1000,
      text: "&quot;In surprising news, Amazon founder and CEO Jeff Bezos announced he will be stepping down as the chief executive officer in a press release. Bezos, an extremely wealthy man, will “transition to the role of Executive Chair” later this year, and Andy Jassy will take the reins as CEO and new subject of internet socialist ire. Jassy is currently the chief executive of Amazon’s cloud computing division and part-owner of the Seattle Krakens.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nBezos’ puzzling retirement comes out of the blue. In a letter to Amazon employees, he says he intends “to focus my energies and attention on new products and early initiatives” and lauds “invention” as key to Amazon’s success. He notably does not explain why he is stepping down as CEO, leaving the internet to come up with their own guesses; hilarity predictably ensues as Twitter imagines Bezos’ new career path.\n\nRelated: MacKenzie Bezos To Give Away Half Her $37 Billion Fortune\n&quot;;",
      author: "John Smith",
      img: placeholder
    }
  ]

  return (
    <div className="App">
      <div className='main-content-container'>
        <header>
          <img src={logo} className="logo" />
          <h1>Business Reddit</h1>
        </header>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed posts={posts}></Feed>} />
          <Route path="/post" element={<Article />} />
        </Routes>
        </BrowserRouter>
        
        
      </div>
    </div>
  );
}

export default App;
