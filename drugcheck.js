/*
Code takes string input of drug name and searches database to get its CUI number.
This number is then taken and used to search for interactions with other drugs
which are then displayed on the page.

interactionPair["0"] is the array to cycle through for all interactions

 */

var drugName1;
var drugName2;
var drugName3;
var drugName4;
var drugName5;
var drugName6;
var drugName7;
var drugName8;
var drugName8;
var drugName10;

var stringURL1 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="
var stringURL2 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="
var stringURL3 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="
var stringURL4 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="
var stringURL5 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="
var stringURL6 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="
var stringURL7 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="
var stringURL8 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="
var stringURL9 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="
var stringURL10 = "https://rxnav.nlm.nih.gov/REST/approximateTerm?term="

var cuiURL = "https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=";
var cuiURLsingle = "https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui="
var data;
var name;
var interaction;
var severity;

function init() {

    document.getElementById("search").addEventListener("click", nameFunction);


    function nameFunction() {
        drugName1 = document.getElementById("userInput1").value;
        stringURL1 += drugName1;
        drugName2 = document.getElementById("userInput2").value;
        stringURL2 += drugName2;
        drugName3 = document.getElementById("userInput3").value;
        stringURL3 += drugName3;
        drugName4 = document.getElementById("userInput4").value;
        stringURL4 += drugName4;
        drugName5 = document.getElementById("userInput5").value;
        stringURL5 += drugName5;
        drugName6 = document.getElementById("userInput6").value;
        stringURL6 += drugName6;
        drugName7 = document.getElementById("userInput7").value;
        stringURL7 += drugName7;
        drugName8 = document.getElementById("userInput8").value;
        stringURL8 += drugName8;
        drugName9 = document.getElementById("userInput9").value;
        stringURL9 += drugName9;
        drugName10 = document.getElementById("userInput10").value;
        stringURL10 += drugName10;
    }

}

$(() => {
    $("#search").click(function (runInteractions) {
        runInteractions.preventDefault();
        if ($("#userInput2").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL2,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                }
            });
        }
        if ($("#userInput3").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL3,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                }
            });
        }
        if ($("#userInput4").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL4,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                }
            });
        }
        if ($("#userInput5").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL5,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                }
            });
        }
        if ($("#userInput6").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL6,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                }
            });
        }
        if ($("#userInput7").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL7,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                }
            });
        }
        if ($("#userInput8").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL8,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                }
            });
        }
        if ($("#userInput9").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL9,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                }
            });
        }
        if ($("#userInput10").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL10,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                }
            });
        }
        if ($("#userInput1").val() != "") {
            $.ajax({
                dataType: "json",
                url: stringURL1,
                type: "GET",
                data: data,
                success: function (cuiData) {
                    console.log(cuiData);
                    cuiURL += cuiData.approximateGroup.candidate["0"].rxcui + "+";
                    cuiURLsingle += cuiData.approximateGroup.candidate["0"].rxcui;
                    spellChecker = cuiData.approximateGroup.comment.slice(0, -2)
                    if (spellChecker != null) {
                        document.getElementById("spellCheck").innerHTML += "<em>" + spellChecker + "</em>" + "</br></br>";
                    }
                    setTimeout(function () {
                        if ($("#userInput2").val() != "") {
                            $.ajax({
                                dataType: "json",
                                url: cuiURL,
                                type: "GET",
                                data: data,
                                success: function (data) {
                                    console.log(cuiURL);
                                    console.log(data);
                                    if (data.hasOwnProperty("fullInteractionTypeGroup")) {
                                        for (var i = 0; i < data.fullInteractionTypeGroup["0"].fullInteractionType.length; i++) {
                                            interaction = "<b>Interaction Warning:</b> " + data.fullInteractionTypeGroup["0"].fullInteractionType[i].interactionPair["0"].description + "</br></br>";
                                            document.getElementById("divDisplay").innerHTML += interaction;
                                        }
                                    }
                                    else {
                                        document.getElementById("divDisplay").innerHTML = "<b>No interactions found!</b>";

                                    }
                                }
                            });
                        }
                        else {
                            $.ajax({
                                dataType: "json",
                                url: cuiURLsingle,
                                type: "GET",
                                data: data,
                                success: function (data) {
                                    console.log(data);
                                    for (var i = 0; i < data.interactionTypeGroup["0"].interactionType["0"].interactionPair.length; i++) {
                                        name = "Drug Name: " + data.interactionTypeGroup["0"].interactionType["0"].interactionPair[i].interactionConcept[1].sourceConceptItem.name;
                                        interaction = "Interaction Warning: " + data.interactionTypeGroup["0"].interactionType["0"].interactionPair[i].description;
                                        severity = "Severity Level: " + data.interactionTypeGroup["0"].interactionType["0"].interactionPair[i].severity;
                                        output = name + "</br>" + interaction + "</br>" + severity + "</br></br>";
                                        document.getElementById("divDisplay").innerHTML += output;
                                    }
                                }
                            });
                        }
                    }, 100);
                }



            });
        }
        else {
            alert("No drugs were entered!");
        }
    });
});

window.onload = init;
