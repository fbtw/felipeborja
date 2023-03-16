
import { ICaseStudy } from '@types';
import { mapCaseStudies } from 'Utils/mappings/mapCaseStudies';
import { NextPage } from 'next';

import { AnimatePage } from 'Atoms/AnimatePage';
import { CaseStudy } from 'Molecules/CaseStudy';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

interface IProps {
	caseStudies: ICaseStudy[];
}

const CaseStudiesPage: NextPage<IProps> = ({ caseStudies }) => {
	return (
		<AnimatePage>
			<SeoHead
				title="Software Engineering Case Studies – Felipe Borja"
				description={`Here you can find 0 case studies of projects I have worked on over the last few years. Learn how I have overcome challenges.`}
			/>
			<Container>
				<h1 className="headline text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
					Formal Experience
				</h1>

				<h2 className="font-bold text-xl md:text-2xl mt-12 mb-4">Maintenance and office work </h2>
				<p className="my-4">
					Notaría 46, Ecuador / 2020 – 2021
				</p>
				<p className="my-4 text-lg md:text-xl lg:text-2xl">
					State controlled mixed company that brings notary and public law
					consultancy services. I gave tech support and directed the digitalization
					operative of several years of physical archive.
				</p>
				<h2 className="font-bold text-xl md:text-2xl mt-12 mb-4">Software Consultancy</h2>
				<p className="my-4">
					<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'https://www.thoughtworks.com/es-ec'} >Thoughtworks </a>
					  / 2017 – 2018
				</p>
				<p className="my-4 text-lg md:text-xl lg:text-2xl">
					Worldwide known software consultancy corporation with relatively
					new local offices in Ecuador. I served international clients using
					complete production lines, with agile method developing, the job was entirely in English
				</p>
				<h2 className="font-bold text-xl md:text-2xl mt-12 mb-4">Tech Consultancy and custom service</h2>
				<p className="my-4">
					<a className="underlined font-bold relative border-b-2 border-grey-300 dark:border-grey-700 hover:border-b-0" href={'https://www.linkedin.com/company/tata-consulting-services-ecuador/'} >TATA consultancy </a>
					/ 2013 – 2014
				</p>
				<p className="my-4 text-lg md:text-xl lg:text-2xl">
					The Indian company offers consultancy in Ecuador for banks and telecom,
					I worked at Movistar office building doing tech support and helpdesk.
				</p>
				<h2 className="font-bold text-xl md:text-2xl mt-12 mb-4">Other Experience / Freelance</h2>
				<p className="my-4">
					Various / 2008-2015
				</p>
				<p className="my-4 text-lg md:text-xl lg:text-2xl">
					Other previous jobs before 2015 include: Spanish translator, waiter,
					callcenter, door-to-door selling, debt collection, PC repair, server
					maintenance, math tutoring and freelance blog design.
				</p>

				{/*
caseStudies.map((caseStudy, i) => (
<CaseStudy key={caseStudy.slug} {...caseStudy} index={i} />
))*/
				}

			</Container>
</AnimatePage>
);
};
/*
export async function getStaticProps() {

const { data } = await client.query({
query: gql`
query CaseStudiesQuery {
caseStudies(orderBy: updatedAt_DESC) {
id
title
slug
seoDescription
client {
name
logo {
url
}
}
content {
raw
}
technologies {
skill
}
primaryImage {
url
}
secondaryImages {
url
}
}
}
`,
});

return {
props: {
caseStudies: mapCaseStudies(data.caseStudies),
},
};
}
*/
export default CaseStudiesPage;
