import { CaseStudyProps } from './CaseStudy';

import { CaseStudy } from './CaseStudy';


export default {
	title: 'molecules/CaseStudy',
	component: CaseStudy,
};

export const CaseStudyStory = (args: CaseStudyProps) => <CaseStudy {...args} />;

CaseStudyStory.storyName = 'CaseStudy';
CaseStudyStory.args = {

	index: 0,
};
