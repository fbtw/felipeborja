import { SocialIcons } from 'Molecules/SocialIcons';

const Footer = () => {
	return (
		<footer className="flex justify-between mt-8 md:mt-20 px-4 md:px-20 py-8">
			<span> Felipe Borja 2023</span>
			<SocialIcons
				profiles={[
					{
						name: 'Github',
						url: 'https://www.github.com/fbtw',
						icon: 'GITHUB',
					},
				]}
			/>
		</footer>
	);
};

export { Footer };
