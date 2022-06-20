console.log("hello world")
console.log("cheesee");
const guru = [
    {
        nama: "Sunarni",
        Status: "Guru Kelas",
        Nip: "190203029092005",
        Kelas:2
    },
    {
        nama: "Yayah Watonah",
        Status: "Guru Bidang",
        Nip:null,
        Kelas:null
    },
    {
        nama:"Lela Nurlela",
        Status: "Guru Kelas",
        Nip:"192005200123005",
        Kelas:6
    },
    {
        nama:"Toni Krosse",
        Status: "Guru Kelas",
        Nip:null,
        Kelas:4
    },
    {
        nama:"Yuli ayuli",
        Status: "Guru Kelas",
        Nip:null,
        Kelas:3
    },
    {
        nama:"Neneng bekuneng",
        Status: "Kepala Sekolah",
        Nip:"210108381208",
        Kelas:null
    },
    {
        nama:"Fitri Putri",
        Status: "Guru Kelas",
        Nip:null,
        Kelas:1
    },
    {
        nama:"Agus Agus",
        Status: "Guru Kelas",
        Nip:"192839572009",
        Kelas:5
    },
    {
        nama:"Ruslan",
        Status: "Guru Kelas",
        Nip:"192839572009",
        Kelas:6
    },
]
const pelajaran = [
    {matapelajaran:"Agama Islam"},
    {matapelajaran:"Pkn"},
    {matapelajaran:"bahasa indonesia"},
    {matapelajaran:"Matematika"},
    {matapelajaran:"SBDP"},
    {matapelajaran:"PJOK"},
    {matapelajaran:"B.Sunda"},
    {matapelajaran:"B.Inggris"},
    {matapelajaran:"Btq"},
]


document.querySelector(".matpel").innerHTML = pelajaran.map((item)=>(
    `<div class="col">${item.matapelajaran}</div>`
))


const ppkn = [
    {kelas:2,KD:"3.1",ket:"mengenal simbol-simbol sila Pancasila dalam lambang negara “Garuda Pancasila”"},
    {kelas:2,KD:"3.2",ket:"memahami tata tertib dan aturan yang berlaku dalam kehidupan sehari-hari di rumah dan sekolah"},
    {kelas:2,KD:"3.3",ket:"memahami makna keberagaman karakteristik individu di rumah dan di sekolah"},
    {kelas:2,KD:"3.4",ket:"memahami arti bersatu dalam keberagaman di rumah dan sekolah"},
]
document.querySelector(".isi").innerHTML = ppkn.map((item)=>(
    `<tr>
    <th colspan="2">${item.KD}</th>
    <td colspan="2">${item.ket}</td>
    <td colspan="2" class="">
    <button type="button" class="btn btn-primary m-3">Rename</button>
    <button type="button" class="btn btn-danger m-3">Delete</button>
    </td>
</tr>`)
    
)
console.log(guru)
document.querySelector(".hello").innerHTML = guru.map((item)=>{
    return item.nama

})

