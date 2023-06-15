import Header from './components/Header';
import Hero from './components/Hero';
import 'boxicons/css/boxicons.min.css';
import AboutSection from './components/About';
import Projects from './components/Projects';
const projectData = [
	{
		id: '1',
		title: 'Project 1',
		description: `Da li znaš da je emocionalna inteligencija ključan faktor za uspješnu karijeru❔

📢Pridruži nam se na praktičnom treningu koji će se održati u utorak, 9.5.2023. godine u periodu od 16:00 do 20:00 u Sarajevu.

Tokom treninga ćemo se baviti svim aspektima EI-a, uz predavanje psihologa koji će nam otkriti kako se EI može uspješno primijeniti u našoj profesionalnoj karijeri, ali i svakodnevnom životu! 🧠💼💪

Od upravljanja stresom i anksioznošću, do poboljšanja komunikacije i odnosa, ova radionica će vam pružiti alate koje trebate kako biste samouvjereno i lako navigirali kroz život. Osim toga, obećavamo da će biti zabavno i angažirajuće! 🤗

👉Popuni formu u opisu profila najkasnije do 5.5.2023. godine do 16:00 ukoliko želiš da se prijaviš ⏳

Odabrani učesnici će biti obaviješteni mailom u roku od 24h od zatvaranja prijava.

Za sva pitanja nam možeš pisati na naše društvene mreže ili na mail info@plusultra.ba.

Ova aktivnost se realizije kroz projekat kojeg član našeg udruženja realizije kroz BOLD program malih grantova Američke ambasade u BiH 🇺🇲`,
		imageUrl: '/project1.jpg',
	},
	{
		id: '2',
		title: 'Radionica emocionalne iteligencije',
		description: `Da li znaš da je emocionalna inteligencija ključan faktor za uspješnu karijeru❔

📢Pridruži nam se na praktičnom treningu koji će se održati u utorak, 9.5.2023. godine u periodu od 16:00 do 20:00 u Sarajevu.

Tokom treninga ćemo se baviti svim aspektima EI-a, uz predavanje psihologa koji će nam otkriti kako se EI može uspješno primijeniti u našoj profesionalnoj karijeri, ali i svakodnevnom životu! 🧠💼💪

Od upravljanja stresom i anksioznošću, do poboljšanja komunikacije i odnosa, ova radionica će vam pružiti alate koje trebate kako biste samouvjereno i lako navigirali kroz život. Osim toga, obećavamo da će biti zabavno i angažirajuće! 🤗

👉Popuni formu u opisu profila najkasnije do 5.5.2023. godine do 16:00 ukoliko želiš da se prijaviš ⏳

Odabrani učesnici će biti obaviješteni mailom u roku od 24h od zatvaranja prijava.

Za sva pitanja nam možeš pisati na naše društvene mreže ili na mail info@plusultra.ba.

Ova aktivnost se realizije kroz projekat kojeg član našeg udruženja realizije kroz BOLD program malih grantova Američke ambasade u BiH 🇺🇲`,
		imageUrl: '/project2.jpg',
	},
	{
		id: '3',
		title: 'Radionica emocionalne iteligencije',
		description: `Da li znaš da je emocionalna inteligencija ključan faktor za uspješnu karijeru❔

📢Pridruži nam se na praktičnom treningu koji će se održati u utorak, 9.5.2023. godine u periodu od 16:00 do 20:00 u Sarajevu.

Tokom treninga ćemo se baviti svim aspektima EI-a, uz predavanje psihologa koji će nam otkriti kako se EI može uspješno primijeniti u našoj profesionalnoj karijeri, ali i svakodnevnom životu! 🧠💼💪

Od upravljanja stresom i anksioznošću, do poboljšanja komunikacije i odnosa, ova radionica će vam pružiti alate koje trebate kako biste samouvjereno i lako navigirali kroz život. Osim toga, obećavamo da će biti zabavno i angažirajuće! 🤗

👉Popuni formu u opisu profila najkasnije do 5.5.2023. godine do 16:00 ukoliko želiš da se prijaviš ⏳

Odabrani učesnici će biti obaviješteni mailom u roku od 24h od zatvaranja prijava.

Za sva pitanja nam možeš pisati na naše društvene mreže ili na mail info@plusultra.ba.

Ova aktivnost se realizije kroz projekat kojeg član našeg udruženja realizije kroz BOLD program malih grantova Američke ambasade u BiH 🇺🇲`,
		imageUrl: '/project2.jpg',
	},
	{
		id: '4',
		title: 'Radionica emocionalne iteligencije',
		description: `Da li znaš da je emocionalna inteligencija ključan faktor za uspješnu karijeru❔

📢Pridruži nam se na praktičnom treningu koji će se održati u utorak, 9.5.2023. godine u periodu od 16:00 do 20:00 u Sarajevu.

Tokom treninga ćemo se baviti svim aspektima EI-a, uz predavanje psihologa koji će nam otkriti kako se EI može uspješno primijeniti u našoj profesionalnoj karijeri, ali i svakodnevnom životu! 🧠💼💪

Od upravljanja stresom i anksioznošću, do poboljšanja komunikacije i odnosa, ova radionica će vam pružiti alate koje trebate kako biste samouvjereno i lako navigirali kroz život. Osim toga, obećavamo da će biti zabavno i angažirajuće! 🤗

👉Popuni formu u opisu profila najkasnije do 5.5.2023. godine do 16:00 ukoliko želiš da se prijaviš ⏳

Odabrani učesnici će biti obaviješteni mailom u roku od 24h od zatvaranja prijava.

Za sva pitanja nam možeš pisati na naše društvene mreže ili na mail info@plusultra.ba.

Ova aktivnost se realizije kroz projekat kojeg član našeg udruženja realizije kroz BOLD program malih grantova Američke ambasade u BiH 🇺🇲`,
		imageUrl: '/project2.jpg',
	},
];
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col '>
			<Hero></Hero>
			<AboutSection></AboutSection>
			<Projects projects={projectData} />
		</main>
	);
}
