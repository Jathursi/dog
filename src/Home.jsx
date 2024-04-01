import React from 'react'
import './Home.css'
import dog1 from './Assets/frenchbull.png'
import dog2 from './Assets/labret.png'
import dog3 from './Assets/gold.png'
import dog4 from './Assets/german.png'
import dog5 from './Assets/poodle.png'
import dog6 from './Assets/bulldog.png'
import dog7 from './Assets/rottwela.png'
import dog8 from './Assets/beagle.png'
import dog9 from './Assets/duchand.png'
import dog10 from './Assets/shorthair.png'
import dog11 from './Assets/pwcorgi.png'
import dog12 from './Assets/ausheprt.png'
import dog13 from './Assets/yorky.png'
import dog14 from './Assets/caveli.png'
import dog15 from './Assets/dober.png'
import dog16 from './Assets/boxer.png'
import dog17 from './Assets/mini.png'
import dog18 from './Assets/corso.png'
import dog19 from './Assets/dane.png'
import dog20 from './Assets/shizu.png'
import dog21 from './Assets/siberian.png'
import dog22 from './Assets/mount.png'
import dog23 from './Assets/pome.png'
import dog24 from './Assets/boston.png'
import dog25 from './Assets/havanes.png'
import dog26 from './Assets/esspan.png'
import dog27 from './Assets/sheepdog.png'
import dog28 from './Assets/amcock.png'
import dog29 from './Assets/britany.png'
import dog30 from './Assets/collie.png'
import dog31 from './Assets/mashep.png'
import dog32 from './Assets/mali.png'
import dog33 from './Assets/visla.png'
import dog34 from './Assets/chihahua.png'
import dog35 from './Assets/pug.png'
import dog36 from './Assets/basset.png'
import dog37 from './Assets/mastif.png'
import dog38 from './Assets/maltese.png'
import dog39 from './Assets/roughcollie.png'
import dog40 from './Assets/ecspan.png'
import dog41 from './Assets/rhode.png'
import dog42 from './Assets/newfound.png'
import dog43 from './Assets/shiba.png'
import dog44 from './Assets/weimmarer.png'
import dog45 from './Assets/whiteterrier.png'
import dog46 from './Assets/portiguz.png'
import dog47 from './Assets/bichon.png'
import dog48 from './Assets/auscattle.png'
import dog49 from './Assets/dalmatien.png'
import dog50 from './Assets/bloodhound.png'
import dog51 from './Assets/pappilon.webp'
import dog52 from './Assets/chesapake.png'
import dog53 from './Assets/samoyed.png'
import dog54 from './Assets/whippet.png'
import dog55 from './Assets/akita.png'
import dog56 from './Assets/bernad.png'
import dog57 from './Assets/wpgiff.png'
import dog58 from './Assets/gschnau.png'
import dog59 from './Assets/gwirehaired.png'
import dog60 from './Assets/scoterrier.png'
import dog61 from './Assets/bullmastiff.png'
import dog62 from './Assets/cwcorgi.png'
import dog63 from './Assets/italianhound.png'
import dog64 from './Assets/bullterrier.png'
import dog65 from './Assets/sharpei.png'
import dog66 from './Assets/airedale.png'
import dog67 from './Assets/wheaten.png'
import dog68 from './Assets/alaskan.png'
import dog69 from './Assets/pyrenees.png'
import dog70 from './Assets/caimterrior.png'
import dog71 from './Assets/irish.png'
import dog72 from './Assets/mpincher.png'
import dog73 from './Assets/jrterrier.png'
import dog74 from './Assets/oesheep.png'
import dog75 from './Assets/stabull.png'
import dog76 from './Assets/la.png'
import dog77 from './Assets/beiterrier.png'
import dog78 from './Assets/doq.png'
import dog79 from './Assets/antolien.png'
import dog80 from './Assets/crested.png'
function Home() {
  return (
    <div className="container">
        <div className="nav">
            <div className="Home">
                Home
            </div>
        </div>
        <div className="wrapper">
            <div className="header">
                <h2>Favourite</h2>
            </div>
            <div className="cards">
                <div className="card">
                    <img className='img_card' src={dog1} alt=''/>
                    <h3>French Bulldog</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog2} alt=''/>
                    <h3>Labrador Retriever</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog3} alt=''/>
                    <h3>Golden Retriever</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog4} alt=''/>
                    <h3>German Shepherd</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog5} alt=''/>
                    <h3>Poodle</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog6} alt=''/>
                    <h3>Bulldog</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog7} alt=''/>
                    <h3>Rottweiler</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog8} alt=''/>
                    <h3>Beagle</h3>
                </div>                
                <div className="card">
                    <img className='img_card' src={dog9} alt=''/>
                    <h3>Dachshund</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog10} alt=''/>
                    <h3>German Shorthaired Pointer</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog11} alt=''/>
                    <h3>Pembroke Welsh Corgi</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog12} alt=''/>
                    <h3>Australian Shepherd</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog13} alt=''/>
                    <h3>Yorkshire Terrier</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog14} alt=''/>
                    <h3>Cavalier King Charles Spaniel</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog15} alt=''/>
                    <h3>Doberman Pinscher</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog16} alt=''/>
                    <h3>Boxer</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog17} alt=''/>
                    <h3>Miniature Schnauzer</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog18} alt=''/>
                    <h3>Cane Corso</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog19} alt=''/>
                    <h3>Great Dane</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog20} alt=''/>
                    <h3>Shih Tzu</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog21} alt=''/>
                    <h3>Siberian Husky</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog22} alt=''/>
                    <h3>Bernese Mountain Dog</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog23} alt=''/>
                    <h3>Pomeranian</h3>
                </div><div className="card">
                    <img className='img_card' src={dog24} alt=''/>
                    <h3>Boston Terrier</h3>
                </div><div className="card">
                    <img className='img_card' src={dog25} alt=''/>
                    <h3>Havanese</h3>
                </div><div className="card">
                    <img className='img_card' src={dog26} alt=''/>
                    <h3>English Springer Spaniel</h3>
                </div><div className="card">
                    <img className='img_card' src={dog27} alt=''/>
                    <h3>Shetland Sheepdog</h3>
                </div><div className="card">
                    <img className='img_card' src={dog28} alt=''/>
                    <h3>American Cocker Spaniel</h3>
                </div><div className="card">
                    <img className='img_card' src={dog29} alt=''/>
                    <h3>Brittany</h3>
                </div><div className="card">
                    <img className='img_card' src={dog30} alt=''/>
                    <h3>Border Collie</h3>
                </div><div className="card">
                    <img className='img_card' src={dog31} alt=''/>
                    <h3>Miniature American Shepherd</h3>
                </div><div className="card">
                    <img className='img_card' src={dog32} alt=''/>
                    <h3>Belgian Malinois</h3>
                </div><div className="card">
                    <img className='img_card' src={dog33} alt=''/>
                    <h3>Vizsla</h3>
                </div><div className="card">
                    <img className='img_card' src={dog34} alt=''/>
                    <h3>Chihuahua</h3>
                </div><div className="card">
                    <img className='img_card' src={dog35} alt=''/>
                    <h3>Pug</h3>
                </div><div className="card">
                    <img className='img_card' src={dog36} alt=''/>
                    <h3>Basset Hound</h3>
                </div><div className="card">
                    <img className='img_card' src={dog37} alt=''/>
                    <h3>Mastiff</h3>
                </div><div className="card">
                    <img className='img_card' src={dog38} alt=''/>
                    <h3>Maltese</h3>
                </div><div className="card">
                    <img className='img_card' src={dog39} alt=''/>
                    <h3>Collie</h3>
                </div><div className="card">
                    <img className='img_card' src={dog40} alt=''/>
                    <h3>English Cocker Spaniel</h3>
                </div><div className="card">
                    <img className='img_card' src={dog41} alt=''/>
                    <h3>Rhodesian Ridgeback</h3>
                </div><div className="card">
                    <img className='img_card' src={dog42} alt=''/>
                    <h3>Newfoundland</h3>
                </div><div className="card">
                    <img className='img_card' src={dog43} alt=''/>
                    <h3>Shiba Inu</h3>
                </div><div className="card">
                    <img className='img_card' src={dog44} alt=''/>
                    <h3>Weimaraner</h3>
                </div><div className="card">
                    <img className='img_card' src={dog45} alt=''/>
                    <h3>West Highland White Terrier</h3>
                </div><div className="card">
                    <img className='img_card' src={dog46} alt=''/>
                    <h3>Portuguese Water Dog</h3>
                </div><div className="card">
                    <img className='img_card' src={dog47} alt=''/>
                    <h3>Bichon Frise</h3>
                </div><div className="card">
                    <img className='img_card' src={dog48} alt=''/>
                    <h3>Australian Cattle Dog</h3>
                </div><div className="card">
                    <img className='img_card' src={dog49} alt=''/>
                    <h3>Dalmatian</h3>
                </div><div className="card">
                    <img className='img_card' src={dog50} alt=''/>
                    <h3>Bloodhound</h3>
                </div><div className="card">
                    <img className='img_card' src={dog51} alt=''/>
                    <h3>Papillon</h3>
                </div><div className="card">
                    <img className='img_card' src={dog52} alt=''/>
                    <h3>Chesapeake Bay Retriever</h3>
                </div><div className="card">
                    <img className='img_card' src={dog53} alt=''/>
                    <h3>Samoyed</h3>
                </div><div className="card">
                    <img className='img_card' src={dog54} alt=''/>
                    <h3>Whippet</h3>
                </div><div className="card">
                    <img className='img_card' src={dog55} alt=''/>
                    <h3>Akita</h3>
                </div><div className="card">
                    <img className='img_card' src={dog56} alt=''/>
                    <h3>St. Bernard</h3>
                </div><div className="card">
                    <img className='img_card' src={dog57} alt=''/>
                    <h3>Wirehaired Pointing Griffon</h3>
                </div><div className="card">
                    <img className='img_card' src={dog58} alt=''/>
                    <h3>Giant Schnauzer</h3>
                </div><div className="card">
                    <img className='img_card' src={dog59} alt=''/>
                    <h3>German Wirehaired Pointer</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog60} alt=''/>
                    <h3>Scottish Terrier</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog61} alt=''/>
                    <h3>Bullmastiff</h3>
                </div>
                <div className="card">
                    <img className='img_card' src={dog62} alt=''/>
                    <h3>Cardigan Welsh Corgi</h3>
                </div><div className="card">
                    <img className='img_card' src={dog63} alt=''/>
                    <h3>Italian Greyhound</h3>
                </div><div className="card">
                    <img className='img_card' src={dog64} alt=''/>
                    <h3>Bull Terrier</h3>
                </div><div className="card">
                    <img className='img_card' src={dog65} alt=''/>
                    <h3>Shar-Pei</h3>
                </div><div className="card">
                    <img className='img_card' src={dog66} alt=''/>
                    <h3>Airedale Terrier</h3>
                </div><div className="card">
                    <img className='img_card' src={dog67} alt=''/>
                    <h3>Soft Coated Wheaten Terrier</h3>
                </div><div className="card">
                    <img className='img_card' src={dog68} alt=''/>
                    <h3>Alaskan Malamute</h3>
                </div><div className="card">
                    <img className='img_card' src={dog69} alt=''/>
                    <h3>Great Pyrenees</h3>
                </div><div className="card">
                    <img className='img_card' src={dog70} alt=''/>
                    <h3>Cairn Terrier</h3>
                </div><div className="card">
                    <img className='img_card' src={dog71} alt=''/>
                    <h3>Irish Setter</h3>
                </div><div className="card">
                    <img className='img_card' src={dog72} alt=''/>
                    <h3>Miniature Pinscher</h3>
                </div><div className="card">
                    <img className='img_card' src={dog73} alt=''/>
                    <h3>Jack Russell Terrier</h3>
                </div><div className="card">
                    <img className='img_card' src={dog74} alt=''/>
                    <h3>Old English Sheepdog</h3>
                </div><div className="card">
                    <img className='img_card' src={dog75} alt=''/>
                    <h3>Staffordshire Bull Terrier</h3>
                </div><div className="card">
                    <img className='img_card' src={dog76} alt=''/>
                    <h3>Lagotto Romagnolo</h3>
                </div><div className="card">
                    <img className='img_card' src={dog77} alt=''/>
                    <h3>Biewer Terrier</h3>
                </div><div className="card">
                    <img className='img_card' src={dog78} alt=''/>
                    <h3>Dogue de Bordeaux</h3>
                </div><div className="card">
                    <img className='img_card' src={dog79} alt=''/>
                    <h3>Anatolian Shepherd Dog</h3>
                </div><div className="card">
                    <img className='img_card' src={dog80} alt=''/>
                    <h3>Chinese Crested</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
