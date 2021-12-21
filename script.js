window.addEventListener(`load`, ()=> {

    let dias = document.getElementById("dias");
    //let dados = document.getElementById("dados");


    const api = `https://api.open-meteo.com/v1/forecast?latitude=39.9161&longitude=-8.6281&hourly=temperature_2m,precipitation,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FLondon`;

    fetch(api)
    .then(response=>{

        return response.json();
    })
    .then(data => {
        //sol
        let {sunrise} = data.daily;
        let {sunset} = data.daily;
        //dias/tempo
        let {time} = data.daily;
        //vento e precipitacao
        let {winddirection_10m_dominant} = data.daily;
        let {windspeed_10m_max} = data.daily;
        let {precipitation_sum} = data.daily;
        //temperaturas
        let {temperature_2m_min} = data.daily;
        let {temperature_2m_max} = data.daily;
        //https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
        //weathercode
        let {weathercode} = data.daily;

        //imagens para a metereologia
        var img = document.createElement("img");
        img.setAttribute("id", "foto");


       /* var dados = [
        document.getElementById(`dia0`), 
        document.getElementById(`dia1`), 
        document.getElementById(`dia2`), 
        document.getElementById(`dia3`), 
        document.getElementById(`dia4`)
    ];
*/
        var dados = [];

        for(let i = 0; i <= 4; i++){
            var sunriseRep = sunrise[i].substring(11);
            var sunsetRep = sunset[i].substring(11);

            dados[i] = document.getElementById(`dia${i}`);

            if(i == 0){
                dados[i].innerHTML = `<h4>Hoje</h4><br>`;
                
                //sol
                if(weathercode[i] < 19){
                    img.setAttribute("src", "imagens/sol.png");
                    dados[i].appendChild(img);
                }
                //nevoeiro
                else if(weathercode[i] <= 49 && weathercode[i] > 19){
                    img.setAttribute("src", "imagens/nuvens.png");
                    dados[i].appendChild(img);
                }
                //granizo
                else if(weathercode[i] <= 59 && weathercode[i] > 49){
                    img.setAttribute("src", "imagens/granizo.png");
                    dados[i].appendChild(img);
                }
                //chuva
                else if(weathercode[i] <= 69 && weathercode[i] > 59){
                    img.setAttribute("src", "imagens/chuvinha.png");
                    dados[i].appendChild(img);
                }
                //aguaceiros
                else if(weathercode[i] <= 94 && weathercode[i] > 59){
                   img.setAttribute("src", "imagens/aguaceiros.png");
                   dados[i].appendChild(img);
                }
                //trovoada
                else if(weathercode[i] <= 99 && weathercode[i] > 94){
                    img.setAttribute("src", "imagens/trovoada.png");
                    dados[i].appendChild(img);
                }

                dados[i].innerHTML += `Máximas: ${temperature_2m_max[i]}º<br>`
                dados[i].innerHTML += `<p>Minímas: ${temperature_2m_min[i]}º</p>`
                dados[i].innerHTML += `<p>Nascer do sol: ${sunriseRep} </p>`;
                dados[i].innerHTML += `<p>Pôr-do-sol: ${sunsetRep}</p>`;
                dados[i].innerHTML += `<p style=${velocidadeVento(windspeed_10m_max[i])}>Vento: ${windspeed_10m_max[i]} Km/h</p>`;
                dados[i].innerHTML += `<p>Direção do Vento: ${converterdirecao(winddirection_10m_dominant[i])}<br>`;
                dados[i].innerHTML += `<p>Precipitação: ${precipitation_sum[i]} mm  </p>`;
            }
            else if(i == 1){     
                dados[i].innerHTML = `<h4>Amanhã</h4><br>`;
                
                //sol
                if(weathercode[i] < 19){
                    img.setAttribute("src", "imagens/sol.png");
                    dados[i].appendChild(img);
                }
                //nevoeiro
                else if(weathercode[i] <= 49 && weathercode[i] > 19){
                    img.setAttribute("src", "imagens/nuvens.png");
                    dados[i].appendChild(img);
                }
                //granizo
                else if(weathercode[i] <= 59 && weathercode[i] > 49){
                    img.setAttribute("src", "imagens/granizo.png");
                    dados[i].appendChild(img);
                }
                //chuva
                else if(weathercode[i] <= 69 && weathercode[i] > 59){
                    img.setAttribute("src", "imagens/chuvinha.png");
                    dados[i].appendChild(img);
                }
                //aguaceiros
                else if(weathercode[i] <= 94 && weathercode[i] > 59){
                    img.setAttribute("src", "imagens/aguaceiros.png");
                    dados[i].appendChild(img);
                }
                //trovoada
                else if(weathercode[i] <= 99 && weathercode[i] > 94){
                    img.setAttribute("src", "imagens/trovoada.png");
                    dados[i].appendChild(img);
                }


                dados[i].innerHTML += `Máximas: ${temperature_2m_max[i]}º<br>`
                dados[i].innerHTML += `<p>Minímas: ${temperature_2m_min[i]}º</p>`
                dados[i].innerHTML += `<p>Nascer do sol: ${sunriseRep} </p>`;
                dados[i].innerHTML += `<p>Pôr-do-sol: ${sunsetRep}</p>`;
                dados[i].innerHTML += `<p style=${velocidadeVento(windspeed_10m_max[i])}>Vento: ${windspeed_10m_max[i]} Km/h</p>`;
                dados[i].innerHTML += `<p>Direção do Vento: ${converterdirecao(winddirection_10m_dominant[i])}<br>`;
                dados[i].innerHTML += `<p>Precipitação: ${precipitation_sum[i]} mm  </p>`;


            }
            else{
                dados[i].innerHTML = `<h4>${time[i]}</h4><br>`;
                
                //sol
                if(weathercode[i] < 19){
                    img.setAttribute("src", "imagens/sol.png");
                    dados[i].appendChild(img);
                }
                //nevoeiro
                else if(weathercode[i] <= 49 && weathercode[i] > 19){
                    img.setAttribute("src", "imagens/nuvens.png");
                    dados[i].appendChild(img);
                }
                //granizo
                else if(weathercode[i] <= 59 && weathercode[i] > 49){
                    img.setAttribute("src", "imagens/granizo.png");
                    dados[i].appendChild(img);
                }
                //chuva
                else if(weathercode[i] <= 69 && weathercode[i] > 59){
                    img.setAttribute("src", "imagens/chuvinha.png");
                    dados[i].appendChild(img);
                }
                //aguaceiros
                else if(weathercode[i] <= 94 && weathercode[i] > 59){
                    img.setAttribute("src", "imagens/aguaceiros.png");
                    dados[i].appendChild(img);
                }
                //trovoada
                else if(weathercode[i] <= 99 && weathercode[i] > 94){
                    img.setAttribute("src", "imagens/trovao.png");
                    dados[i].appendChild(img);
                }
                dados[i].innerHTML += `Máximas: ${temperature_2m_max[i]}º<br>`
                dados[i].innerHTML += `<p>Minímas: ${temperature_2m_min[i]}º</p>`
                dados[i].innerHTML += `<p>Nascer do sol: ${sunriseRep} </p>`;
                dados[i].innerHTML += `<p>Pôr-do-sol: ${sunsetRep}</p>`;
                dados[i].innerHTML += `<p style=${velocidadeVento(windspeed_10m_max[i])}>Vento: ${windspeed_10m_max[i]} Km/h</p>`;
                dados[i].innerHTML += `<p>Direção do Vento: ${converterdirecao(winddirection_10m_dominant[i])}<br>`;
                dados[i].innerHTML += `<p>Precipitação: ${precipitation_sum[i]} mm  </p>`;

            }
        }




        //dados.innerHTML += `O sunset hoje é às ${}`;


        //console.log(data);
        
    })

});

function converterdirecao(graus){
    //converter os graus em direcao do vento

    if(graus <= 25 || graus >= 330){
        return "Norte";
    }
    else if(graus >= 25 && graus <= 75){
        return "Nordeste";
    }
    else if(graus >= 75 && graus <= 115){
        return "Este";
    }
    else if(graus >= 115 && graus <= 160){
        return "Sudeste";
    }
    else if (graus >= 160 && graus <= 200){
        return "Sul";
    }
    else if(graus >= 200 && graus <= 250){
        return "Sudoeste";
    }
    else if(graus >= 250 && graus <= 290){
        return "Oeste";
    }
    else{
        return "Noroeste"
    }
}

function velocidadeVento(velocidade){
    //definir a cor em definiciao da velocidade do vento

    if(velocidade <= 29){
        return "color:#339966";
    }
    else if(velocidade >= 29 && velocidade <= 87){
        return "color:#ff6600";
    }
    else{
        return "color:#ff0000";
    }
}