import React, { useState, useEffect } from 'react';

import { MdFirstPage, MdLastPage } from 'react-icons/md';

import '../../components scss/clips.scss';
import Header from '../../components/Header/Header'

import itadorin from '../../Assets/Imagens/itadori-teach.webp'

import ScrollToTop from 'react-scroll-to-top';

export default function Clips() {
  const animes = [
    { id: '77', nome: 'Shangri-La Frontier', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1185347955314655293/shangri-la-frontier.webp?ex=658f484f&is=657cd34f&hm=fb3ac91ed052a37f8f84abf17418bce4637a6866a939d787bc9d497ee05e5fc3&', link: 'https://www.playbook.com/s/ajksz/rzC1dmhQuyVBW5ZZx1FeGvgS' },
    { id: '76', nome: 'Ragna Crimson, ', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1180650436668170280/Ragna-Crimson-S1.webp?ex=657e3167&is=656bbc67&hm=873b995cf81269eede224c695e24f88fa5bb05cbbfd7a2931b82946b6e96f4bf&', link: 'https://www.playbook.com/s/ajksz/eNFdihFCFStXUnYVaeux45tZ' },
    { id: '75', nome: 'Violet Movies', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1169108988886003732/Violet-Movies.webp?ex=65543497&is=6541bf97&hm=d5a007cc2bade5d8c3cb4de4f0bc60527c10db61ef013968d3b175d5740dfc4c&', link: 'https://www.playbook.com/s/ajksz/QaSN9y1br7G8ymCf9VWj4GgB' },
    { id: '74', nome: 'Violet Evergarden', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1169108969474769016/Violet-S1.webp?ex=65543493&is=6541bf93&hm=cc9ce657556823bbf61d655759cb906de16d2366a4a8630d78a4a99df37e8367&', link: 'https://www.playbook.com/s/ajksz/kBdr4JkLjwB4kQS3XB2kihyz' },
    { id: '73', nome: 'Jujutsu Kaisen 0', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1139899403021320242/jujutsu-kaisen-0.webp', link: 'https://www.playbook.com/s/ajksz/KGCYWcyNQDCWfNmhjCFJHq79' },
    { id: '72', nome: 'Zankyō no Terror, Zankyou no Terror', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1139899371127853156/zanky197141-no-terror.webp', link: 'https://www.playbook.com/s/ajksz/onsCyDkS3xuQAA51uq5wt8Fg' },
    { id: '71', nome: 'Weathering with You, Tenki no Ko', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1137197194013851709/weathering-with-you.webp', link: 'https://www.playbook.com/s/ajksz/ZTPx8Z4VMPyniu5VRFGzEkqB' },
    { id: '70', nome: 'Vinland Saga Season 1', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1137197208161226752/vinland-saga-season-1.webp', link: 'https://www.playbook.com/s/ajksz/meVMR48hcwugNyJLkudM5yER' },
    { id: '69', nome: 'Tokyo Ghoul Season 1', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1137197217892012103/tokyo-ghoul-season-1.webp', link: 'https://www.playbook.com/s/ajksz/kxB1daNukQ6dLy6crWL13qqt' },
    { id: '68', nome: 'Tokyo Ghoul Season 2', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1137197228864327710/tokyo-ghoul-season-2.webp', link: 'https://www.playbook.com/s/ajksz/4cCWVcNN7hqBgYzScSJvc3GY' },
    { id: '67', nome: 'Tamako Market', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135638905140555786/tamako-market.webp', link: 'https://www.playbook.com/s/ajksz/fz7VoWu8VrZrduZxPm4N9XfS' },
    { id: '66', nome: 'Tamako Love Story', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135638918222589962/tamako-love-story.webp', link: 'https://www.playbook.com/s/ajksz/2nPFodY4EeX2iTZz4uDYvqyB' },
    { id: '65', nome: 'The Garden of Words', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135638926174982377/the-garden-of-words.webp', link: 'https://www.playbook.com/s/ajksz/cff3fpBo1vFvPsHFr2Ax1ade' },
    { id: '64', nome: 'The Disappearance of Haruhi Suzumiya, Suzumiya Haruhi no Shoushitsu', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135638930293788763/the-disappearance-of-haruhi-suzumiya.webp', link: 'https://www.playbook.com/s/ajksz/weuX4S8AH2iqEf4rSBcWxBCM' },
    { id: '63', nome: 'Howl no Ugoku Shiro, Howl s Moving Castle ', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135278555274682468/howl-no-ugoku-shiro.webp', link: 'https://www.playbook.com/s/ajksz/o2FH5QZkFqEcuhy1CqzD3UNL' },
    { id: '62', nome: 'Steins;Gate, Steins Gate', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135278542939238410/steins-gate.webp', link: 'https://www.playbook.com/s/ajksz/df2o3DPgzn7NCaLn76w6ZpNA' },
    { id: '61', nome: 'Umi ga Kikoeru, The Ocean Waves, I Can Hear the Sea, Ocean Waves ', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135278569510162452/ocean-waves.webp', link: 'https://www.playbook.com/s/ajksz/KtVvMgYZqzUGcBrXbwdiJoaG' },
    { id: '60', nome: 'Sen to Chihiro no Kamikakushi, Spirited Away, Sen and Chihiro s Spiriting Away', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135278581367455948/sen-to-chihiro-no-kamikakushi.webp', link: 'https://www.playbook.com/s/ajksz/TM5x7JJXTeXc1pZUXJYFVtq1' },
    { id: '59', nome: 'Noragami Season 1 - Stray God', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117569641164872/noragami-season-1-stray-god.webp', link: 'https://www.playbook.com/s/ajksz/4NLC16HDTiwP9XBtiHfKDgWk' },
    { id: '58', nome: 'Noragami Season 2 - Aragato', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117580542169098/noragami-season-2-aragato.webp', link: 'https://www.playbook.com/s/ajksz/VQd8d79JzaTTaLHr9g66fP9s' },
    { id: '57', nome: 'Perfect Blue', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117611617759262/Perfect-Blue.webp', link: 'https://www.playbook.com/s/ajksz/VUBuKB72vmNBVAnYBsTWQyvW' },
    { id: '56', nome: 'Plastic Memories Season 1', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117621218517063/Plastic-Memories.webp', link: 'https://www.playbook.com/s/ajksz/9XqFch5rkNWPv6FXXdYsWQPf' },
    { id: '55', nome: 'kyoukai no kanata season 1', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117511206113370/kyoukai-no-kanata-season-1.webp', link: 'https://www.playbook.com/s/ajksz/CFdbjD4UC9GwTwZFMLjxSunV' },
    { id: '54', nome: 'Megalo Box Season 1', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117518051221575/megalo-box-season-1.webp', link: 'https://www.playbook.com/s/ajksz/Gh2f9s6cWWZHcWicFNHMP3GE' },
    { id: '53', nome: 'Mekakucity Actors', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117523201835079/mekakucity-actors.webp', link: 'https://www.playbook.com/s/ajksz/vmmnwRsgJ63v3UnmBKZTYRet' },
    { id: '52', nome: 'Mob Psycho 100 Season 1', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117542856343692/mob-psycho-100-season-1.webp', link: 'https://www.playbook.com/s/ajksz/YxBx7KoXKPpT2sbN9dUNZoYn' },
    { id: '51', nome: 'Kuroko no Basket Movie 4 - Last Game', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117415454347344/kuroko-no-basket-movie-4-last-game.webp', link: 'https://www.playbook.com/s/ajksz/HuFzoZ2N1bEkTFM7hi7Ke6wq' },
    { id: '50', nome: 'Kuroko no Basket Winter Cup Movie 1 - Kage to Hikari', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117222700916766/winter-cup-movie-1-kage-to-hikari.webp', link: 'https://www.playbook.com/s/ajksz/DzYkrY5yKd5wcEiPdBZgcHhj' },
    { id: '49', nome: 'Kuroko no Basket Winter Cup Movie 2 - Namida no Saki e', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117236483395664/inter-cup-movie-2-namida-no-saki-e.webp', link: 'https://www.playbook.com/s/ajksz/vs8aN7eWEENZbU2HwsWq2ytN' },
    { id: '48', nome: 'Kuroko no BasketWinter Cup Movie 3 - Tobira no Mukou', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117248617513042/winter-cup-movie-3-tobira-no-mukou.webp', link: 'https://www.playbook.com/s/ajksz/gDJcC8zKbfnGA35tPeD6xapA' },
    { id: '47', nome: 'Darling in the FranXX', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116976214265866/darling-in-the-franxx.webp', link: 'https://www.playbook.com/s/ajksz/HP3AiP7H93ZYwqW4AYMA1yqy' },
    { id: '46', nome: 'Kiznaiver', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117449382072380/kiznaiver.webp', link: 'https://www.playbook.com/s/ajksz/MAJYDXRofRfDoM3wwD76FcMg' },
    { id: '45', nome: 'Koe no Katachi', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117464733233244/koe-no-katachi.webp', link: 'https://www.playbook.com/s/ajksz/zibQa916Aw9c1hgfu4HsxubA' },
    { id: '44', nome: 'K-On! The Movie', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117482202517564/k-on-the-movie.webp', link: 'https://www.playbook.com/s/ajksz/dxqN1M8a7MetBJmxKDUoo85L' },
    { id: '43', nome: 'I Want To Eat Your Pancreas', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117427622027344/i-want-to-eat-your-pancreas.webp', link: 'https://www.playbook.com/s/ajksz/Z6YAttgbwBnKpJrmQ17XTfsB' },
    { id: '42', nome: 'Jujutsu Kaisen Season 1', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117435427635310/jujutsu-kaisen-season-1.webp', link: 'https://www.playbook.com/s/ajksz/CaKP9pJ2ZmtNeML5VBcc6EdL' },
    { id: '41', nome: 'K Project', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117489664184340/k-project.webp', link: 'https://www.playbook.com/s/ajksz/ihsqKbfJb6raceu5Zd7qYwgP' },
    { id: '40', nome: 'Haikyuu!! Movie 1 - Owari to Hajimari', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117101896581130/haikyuu-movie-1-owari-to-hajimari.webp', link: 'https://www.playbook.com/s/ajksz/Eiig8DW39geUdkMjyqpyR127' },
    { id: '39', nome: 'Haikyuu!! Movie 2 - Shousha to Haisha', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117109295321148/haikyuu-movie-2-shousha-to-haisha.webp', link: 'https://www.playbook.com/s/ajksz/Y9SEzLHsx8Qtq1jb9mnCiTQU' },
    { id: '38', nome: 'Haikyuu!! Movie 3 - Sainou to Sense', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117116215935109/haikyuu-movie-3-sainou-to-sense.webp', link: 'https://www.playbook.com/s/ajksz/UBBwXu6bd6CtRwPEZmA6uUdq' },
    { id: '37', nome: 'Haikyuu!! Movie 4 - Concept no Tatakai', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117122599661589/haikyuu-movie-4-concept-no-tatakai.webp', link: 'https://www.playbook.com/s/ajksz/mrr2waQhdKuQ6yfaZ2mtP1fd' },
    { id: '36', nome: 'Black Lagoon', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116942412349587/black-lagoon.webp', link: 'https://www.playbook.com/s/ajksz/vWcT3S3ZcYL4Wj4WuoorFxbn' },
    { id: '35', nome: 'Devilman Crybaby', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117001577213992/devilman-crybaby.webp', link: 'https://www.playbook.com/s/ajksz/vqzpVfURBStUcjEPSbU7j7x9' },
    { id: '34', nome: 'Shingeki no Kyojin 1, Attack on Titan 1', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116847017111623/attack-on-titan-season-1.webp', link: 'https://www.playbook.com/s/ajksz/X6vBUfS9v39dDUE22CWK8Y2C' },
    { id: '33', nome: 'Shingeki no Kyojin 2, Attack on Titan 2', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116854554284073/attack-on-titan-season-2.webp', link: 'https://www.playbook.com/s/ajksz/MC9iq94PJDg39dmFTAKjdZ8P' },
    { id: '32', nome: 'Shingeki no Kyojin 3, Attack on Titan 3', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116861311295519/attack-on-titan-season-3.webp', link: 'https://www.playbook.com/s/ajksz/waM4TpKgGZR6smcELRrhVGzL' },
    { id: '31', nome: 'Shingeki no Kyojin 4, Attack on Titan 4', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116914012721202/attack-on-titan-season-4.webp', link: 'https://www.playbook.com/s/ajksz/dGjYBQ8TcqnRYAREGLwKkk4T' },
    { id: '30', nome: 'Bersek Movie', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116931435872326/bersek.webp', link: 'https://www.playbook.com/s/ajksz/Fme1L8hynLAYDkKpm7AFbcAp' },
    { id: '29', nome: 'My Dress up Darling, Sono Bisque Doll wa Koi wo Suru ', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117551463051345/my-dress-up-darling.webp', link: 'https://www.playbook.com/s/ajksz/73DWBU429xxnRGFKHQzwrDLj' },
    { id: '28', nome: 'Your Name, Kimi no Na wa', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117662448529508/your-name.webp', link: ' https://www.playbook.com/s/ajksz/Nzd9xrKqdEQjN8B2v6hQ1uzs ' },
    { id: '27', nome: 'Arcane', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116840587247756/arcane.webp', link: 'https://www.playbook.com/s/ajksz/TMpidTNxLZT59SWY3dEc5T1H' },
    { id: '26', nome: 'Kakegurui Twin', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117441618427985/kakegurui-twin.webp', link: 'https://www.playbook.com/s/ajksz/MF43YvbsRvs9E9BW6U7U3GUP' },
    { id: '25', nome: 'One Punch Man Season 1', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117589786398750/one-punch-man-s1.webp', link: 'https://www.playbook.com/s/ajksz/gnzJDEvHsB7w56Sijddh2Zg3' },
    { id: '24', nome: 'One Punch Man Season 2', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117597109657620/one-punch-man-s2.webp', link: 'https://www.playbook.com/s/ajksz/2qGScAbMLRgHvJ45bjTfbTv3' },
    { id: '23', nome: 'Summer Ghost', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117641544114306/summer-ghost.webp', link: 'https://www.playbook.com/s/ajksz/Q5y12Ku9ccKJoVbZbt18CZxh' },
    { id: '22', nome: 'Bakemonogatari', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116923462483988/bakemonogatari.webp', link: 'https://www.playbook.com/s/ajksz/iHbgYQZpzzWrwVLPwnypucxK' },
    { id: '21', nome: 'Nisemonogatari', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117561244156013/nisemonogatari.webp', link: 'https://www.playbook.com/s/ajksz/GwZNak6VXQrSrprZpY8yCdaF' },
    { id: '20', nome: 'Kizumonogatari', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117457183485982/kizumonogatari.webp', link: 'https://www.playbook.com/s/ajksz/5epc7v3rs418TSDet7KtzpLu' },
    { id: '19', nome: 'Another', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116822237155358/another.webp', link: 'https://www.playbook.com/s/ajksz/GM299MEnvaXz1DPwhKwKbbnE' },
    { id: '18', nome: 'Cowboy Bebop the movie', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116964327600148/cowboy-bebop-the-movie.webp', link: 'https://www.playbook.com/s/ajksz/Gy5XrbaRD4AN5ZqiSvAgnNS7' },
    { id: '17', nome: 'Fate Stay Night', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117070858723458/fate-stay-night.webp', link: 'https://www.playbook.com/s/ajksz/Gqd9huytKrjWUwPoQrEmrKD7' },
    { id: '16', nome: 'Komi-san wa, Komi Can t Communicate', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117472635301968/komi-san.webp', link: 'https://www.playbook.com/s/ajksz/FzVKExTfWvZV51wAEJfMpGqs' },
    { id: '15', nome: 'shikimori s not just a cutie, Kawaii dake ja Nai Shikimori-san', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117629225439314/shikimoris_not_just_a_cutie.webp', link: 'https://www.playbook.com/s/ajksz/htciweR7pGqWzbam5MszwaeZ' },
    { id: '14', nome: 'White Album 2', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117651203604491/white_album_2.webp', link: 'https://www.playbook.com/s/ajksz/H5LPddNDSLXhNk9D5QYeaJ7D' },
    { id: '13', nome: 'A Kite', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116813513007144/a-kite.webp', link: 'https://www.playbook.com/s/ajksz/xvE6knK38x7rHeusbVCgHxuR' },
    { id: '12', nome: 'Ao Haru Ride', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116830613192785/ao-haru-ride.webp', link: 'https://www.playbook.com/s/ajksz/LvrBwWmf2Hsfp5YcLWCsZSpd' },
    { id: '11', nome: 'Citrus', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116953866997840/citrus.webp', link: 'https://www.playbook.com/s/ajksz/eqHnKbDSdLsz6jopjA9KXkWu' },
    { id: '10', nome: 'Demon Slayer', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116986184122440/demon-slayer.webp', link: 'https://www.playbook.com/s/ajksz/yvFF8FbHQJWH4ngLrCKdvmob' },
    { id: '9', nome: 'Gangsta', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117089145892914/gangsta.webp', link: 'https://www.playbook.com/s/ajksz/Ug1QLyq44qC8TMzePzzFPFKg' },
    { id: '8', nome: 'Hyouka', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117132552736778/hyouka.webp', link: 'https://www.playbook.com/s/ajksz/CXz2cW9soEq8EriStW5qBxcT' },
    { id: '7', nome: '5 Centimeters per Second', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116797666938890/5-seconds-per-second.webp', link: 'https://www.playbook.com/s/ajksz/xmKfDSZRksw1119g7mqgcR4b' },
    { id: '6', nome: 'Afro Samurai', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135116807469019156/afro-samurai.webp', link: 'https://www.playbook.com/s/ajksz/HGnjR1G2euhtDr4W4VVWtiRg' },
    { id: '5', nome: 'FLCL', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117082388869181/flcl.webp', link: 'https://www.playbook.com/s/ajksz/dt5YL24CpDPEGwYCkXnHdAoQ' },
    { id: '4', nome: 'Erased', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117062482690078/erased.webp', link: 'https://www.playbook.com/s/ajksz/twxam1twoxAcHXECGvDezjfX' },
    { id: '3', nome: 'Domestic Girlfriend', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117028869537846/domestic-girlfriend.webp', link: 'https://www.playbook.com/s/ajksz/nfFp193i8XZFxmU8ocvEngHS' },
    { id: '2', nome: 'Dusk Maiden of Amnesia', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117052273770516/dusk-of-maiden-amnesia.webp', link: 'https://www.playbook.com/s/ajksz/rwqGpDzGMEvsWorWc5uMVjDy' },
    { id: '1', nome: 'Horimiya', imagem: 'https://cdn.discordapp.com/attachments/1135116775051239434/1135117127947386950/horimiya.webp', link: 'https://www.playbook.com/s/ajksz/hdjqXGF2BX6KHYTasHiHY6Vo' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [showmensagem, setShowMensagem] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.anime-images');

      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        image.classList.toggle('hidden', !isVisible)
      })
    }

    window.addEventListener('scroll', handleScroll);

  }, []);

  const handleImageLoad = () => {
    const images = document.querySelectorAll('.anime-images');
    const allImagesLoades = Array.from(images).every((image) => image.complete);

    if (allImagesLoades) {
      setImagesLoaded(true);
    }
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    if (e.target.value !== '' && filteredAnimes.length === 0) {
      setShowMensagem(true);
      document.getElementById('pagesid').style.display = 'none';
    } else if (e.target.value && filteredAnimes) {
      document.getElementById('pagesid').style.display = 'none';
      setShowMensagem(false);
    }
    else {
      setShowMensagem(false)
      document.getElementById('pagesid').style.display = 'block';
    }
  };

  const filteredAnimes = animes.filter((anime) => anime.nome.toLowerCase().includes(searchTerm.toLowerCase()));

  const itenPorPagina = 40;
  const totalPaginas = Math.ceil(filteredAnimes.length / itenPorPagina);
  const indexInicio = (currentPage - 1) * itenPorPagina;
  const indexFim = indexInicio + itenPorPagina;
  const animesPaginaAtual = filteredAnimes.slice(indexInicio, indexFim);

  const irParaPaginaAnterior = () => {
    setCurrentPage((paginaAnterior) => Math.max(paginaAnterior - 1, 1))
  }

  const irParaProximaPagina = () => {
    setCurrentPage((proximaPagina) => Math.min(proximaPagina + 1, totalPaginas))
  }

  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const [itadorinOpen, setItadorinOpen] = useState(true)

  const removeItadorin = () => {
    setItadorinOpen(false)
  }

  const openPopup = (src) => {
    setIframeSrc(src);
    setIsOpen(true)
  }

  const closePopup = () => {
    setIframeSrc("");
    setIsOpen(false);
    setIframeLoad(false)
    setItadorinOpen(true)
  }

  const [load, setLoad] = useState(false);
  const [iframeLoad, setIframeLoad] = useState(false)
  const [loading, setLoading] = useState(true)
  const [contentLoading, setContentLoading] = useState(false)

  const handleLoading = () => {
    setLoading(false)
    setContentLoading(true)
  }

  const handleClickImage = () => {

    setLoad(true)

  }

  const handLoad = () => {
    setIframeLoad(true)
    setLoad(false)
  }

  return (
    <div onLoad={handleImageLoad} id='content-all' >

      {imagesLoaded && (
        <>
          <Header />

          <div className='search-content'>
            <input className='search-part' type="text" name="" id="" placeholder='Anime name...' onChange={handleSearch} />
          </div>
        </>
      )}

      <ScrollToTop />

      {showmensagem && <p className='error-search'> Anime not found... </p>}

      {loading && (

        <div className="loadingOverlay">

          loading...

        </div>

      )}

      <div className='anime-space-content' onLoad={handleLoading} style={{ display: contentLoading ? 'flex' : 'none' }}>

        <div className="paginas" id='pagesid'>
          <button onClick={irParaPaginaAnterior} disabled={currentPage === 1} > <MdFirstPage fill='black' /> </button>
          <span id='contagem'>{`${currentPage} / ${totalPaginas}`}</span>
          <button onClick={irParaProximaPagina} disabled={currentPage === totalPaginas} > <MdLastPage fill='black' /> </button>
        </div>

        {animesPaginaAtual.map((anime) => (

          <div className='spance-capas' onClick={handleClickImage} key={anime.id}>

            <img className='anime-images' onClick={() => openPopup(anime.link)} src={anime.imagem} alt={anime.nome} />

          </div>



        ))}

        {load && (

          <div className="loadingOverlay">

            <span className="loader"></span>

          </div>

        )}

        {isOpen && (
          <div className="popup" onLoad={handLoad} style={{ display: iframeLoad ? 'block' : "none" }}>

            <div className='addanimaiton' >

              <img src={itadorin} className='teach' alt="como fazer download dos clips" onLoad={handLoad} style={{ display: itadorinOpen ? 'block' : 'none' }} />

              <button onClick={removeItadorin}> X </button>

            </div>

            <button onClick={closePopup}> X </button>

            <iframe src={iframeSrc} frameborder="0" title='clips area' ></iframe>

          </div>
        )}

      </div>

    </div>
  );
}
