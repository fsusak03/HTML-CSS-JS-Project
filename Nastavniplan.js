$(document).ready(function() {
    const jwt = sessionStorage.getItem('JWT');
 
    $('#table ').hide();
    $('#tableFooter ').hide();

    
    fetch('https://www.fulek.com/data/api/supit/curriculum-list/hr', {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const curriculumList = data.data;
        let sumEcts = 0;
        let sumSati = 0;
        let sumPredavanja = 0;
        let sumvjezbe = 0;

        $('#userInput').on('input', function() {
            const userInput = $(this).val().toLowerCase();

            $('#autocomplete-list').empty();

            if (userInput.trim() !== '') {
                const filteredList = curriculumList.filter(item => item.kolegij.toLowerCase().startsWith(userInput));

                console.log(filteredList);

                filteredList.forEach(item => {
                    const listItem = $(`<li>${item.kolegij}</li>`);
                    listItem.on('click', function() {
                        $('#userInput').val('');
                        
                        const row = $(`
                            <tr>
                                <td>${item.kolegij}</td>
                                <td class="ects">${item.ects}</td>
                                <td class="sati">${item.sati}</td>
                                <td class="predavanja">${item.predavanja}</td>
                                <td class="vjezbe">${item.vjezbe}</td>
                                <td>${item.tip}</td>
                                <td><button class="delete-button">Delete</button></td>
                            </tr>
                        `);

                        row.find('.delete-button').on('click', function() {
                            sumEcts -= parseInt(row.find('.ects').text(), 10);
                            sumSati -= parseInt(row.find('.sati').text(), 10);
                            sumPredavanja -= parseInt(row.find('.predavanja').text(), 10);
                            sumvjezbe -= parseInt(row.find('.vjezbe').text(), 10);
                            $('#sumvjezbe').text(sumvjezbe);

                            $('#sumEcts').text(sumEcts);
                            $('#sumSati').text(sumSati);
                            $('#sumPredavanja').text(sumPredavanja);
                            row.remove();

                        });

                        $('#table ').append(row);
                        sumEcts += item.ects;
                        sumSati += item.sati;
                        sumPredavanja += item.predavanja;
                        sumvjezbe +=item.vjezbe;
                        $('#sumEcts').text(sumEcts);
                        $('#sumSati').text(sumSati);
                        $('#sumPredavanja').text(sumPredavanja);
                        $('#sumvjezbe').text(sumvjezbe);
                        $('#tableFooter ').show();

                        $('#table').show();
                        $('#autocomplete-list').hide();

                    });
                    $('#autocomplete-list').append(listItem);
                });
                $('#autocomplete-list').show();

            }
            
        });
    })
    .catch(error => console.error('Error:', error));
});



