function find_edit() {
    // Меняем фамилию и имя на латиницу
    const last_name_node = document.getElementById("last_name_id");
    last_name_node.innerHTML = "<b>Granatkin</b>";

    const first_name_node = document.getElementById("first_name_id");
    first_name_node.innerHTML = "<b>Pavel</b>";

    // Год рождения
    const birth_year_node = document.getElementById("birth_year_id");
    const birth_year = parseInt(birth_year_node.innerText);
    birth_year_node.innerHTML = "<b>" + birth_year + "</b>";

    // Сообщаем, что всё изменено
    node_for_click.innerText = "Готово: фамилия, имя и год рождения записаны латиницей";
}

const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", find_edit);
