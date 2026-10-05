
//cau 1
let team = [
    { id: "P001", name: "Bulbasaur", type: "Grass", level: 12, hp: 45 },
    { id: "P004", name: "Charmander", type: "Fire", level: 15, hp: 39 },
    { id: "P007", name: "Squirtle", type: "Water", level: 10, hp: 44 },
    { id: "P025", name: "Pikachu", type: "Electric", level: 20, hp: 35 }
];

const validTypes = ["Electric", "Fire", "Water", "Grass", "Psychic", "Normal"];

// Cau 3: Xoa pokemoon
function addPokemon(pokemon) {

    if (team.some(p => p.id === pokemon.id)) {
        console.error("ID đã tồn tại, vui lòng chọn ID khác.");
        return;
    }

    if (team.some(p => p.name.toLowerCase() === pokemon.name.toLowerCase())) {
        console.error("Tên Pokémon đã có trong đội.");
        return;
    }

    if (!Number.isInteger(pokemon.level) || pokemon.level < 1 || pokemon.level > 100) {
        console.error("Cấp độ phải là số nguyên từ 1 đến 100.");
        return;
    }

    if (!Number.isInteger(pokemon.hp) || pokemon.hp <= 0) {
        console.error("HP phải là số và lớn hơn 0.");
        return;
    }
    if (!validTypes.includes(pokemon.type)) {
        console.error("Hệ không hợp lệ. Phải là một trong các giá trị: 'Electric', 'Fire', 'Water', 'Grass', 'Psychic', 'Normal'.");
        return;
    }

    team.push(pokemon);
    console.log(`Đã thêm Pokémon: ${pokemon.name} vào đội hình!`);
}

//Cau 4 hien thi danh sach

function showTeam() {
    console.log("===== Danh sách đội hình =====");
    team.sort((a, b) => b.level - a.level); 
    team.forEach(p => {
        console.log(`ID: ${p.id}, Tên: ${p.name}, Hệ: ${p.type}, Level: ${p.level}, HP: ${p.hp}`);
    });
}

// Cau 5 cap nhat pokemon

function updatePokemon(name, newLevel, newHp) {
    let pokemon = team.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (!pokemon) {
        console.log(`Pokémon ${name} không có trong đội!`);
        return;
    }
    if (newLevel !== undefined) {
        if (!Number.isInteger(newLevel) || newLevel < 1 || newLevel > 100) {
            console.error("Cấp độ phải là số nguyên từ 1 đến 100.");
            return;
        }
        pokemon.level = newLevel;
    }
    if (newHp !== undefined) {
        if (!Number.isInteger(newHp) || newHp <= 0) {
            console.error("HP phải là số và lớn hơn 0.");
            return;
        }
        pokemon.hp = newHp;
    }
    console.log(`Đã cập nhật Pokémon: ${pokemon.name}`);
}


// Câu 6 tim kiem pokemon
function findPokemonByName(name) {
    let pokemon = team.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (!pokemon) {
        console.log(`Không tìm thấy Pokémon nào có tên ${name}.`);
    } else {
        console.log(`Pokémon tìm thấy: ${pokemon.name}, Hệ: ${pokemon.type}, Cấp: ${pokemon.level}, HP: ${pokemon.hp}`);
    }
}

function findPokemonByType(type) {
    let pokemons = team.filter(p => p.type === type);
    if (pokemons.length === 0) {
        console.log(`Không có Pokémon nào thuộc hệ ${type}.`);
    } else {
        console.log(`Danh sách Pokémon hệ ${type}:`);
        pokemons.forEach(p => console.log(`${p.name}, Level: ${p.level}, HP: ${p.hp}`));
    }
}

// bai 7: Loc polemon hop le

function filterPokemonByType(type) {
    if (!validTypes.includes(type)) {
        console.error("Hệ không hợp lệ!");
        return;
    }
    let pokemons = team.filter(p => p.type === type);
    if (pokemons.length === 0) {
        console.log(`Hiện tại đội chưa có Pokémon hệ ${type}.`);
    } else {
        console.log(`Danh sách Pokémon hệ ${type}:`);
        pokemons.forEach(p => console.log(`${p.name}, Level: ${p.level}, HP: ${p.hp}`));
    }
}

// Cau 8 Tinh tong suc manh doi hinh
function calculateTeamPower() {
    let totalLevel = 0;
    let totalHP = 0;
    for (let p of team) {
        totalLevel += p.level;
        totalHP += p.hp;
    }
    console.log(`Tổng sức mạnh đội hình hiện tại: Tổng level: ${totalLevel} Tổng HP: ${totalHP}`);
}

// Demo
showTeam();
addPokemon({ id: "P010", name: "Caterpie", type: "Normal", level: 5, hp: 30 });
removePokemon("Squirtle");
updatePokemon("Pikachu", 25, 40);
findPokemonByName("Charmander");
findPokemonByType("Fire");
filterPokemonByType("Grass");
calculateTeamPower();