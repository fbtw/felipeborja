import { IJob } from '@types';

import classNames from 'classnames';


import { Job } from 'Molecules/Job';

export interface WorkExperienceProps {
	jobs: IJob[];
}

const WorkExperience = ({ jobs }: WorkExperienceProps) => {
	return (
		<>
			{jobs.map(
				(
					{ company, jobTitle, fromDate, toDate, technologies, description },
					index
				) => (
					<div
						className={classNames(
							'flex transition-all transform md:hover:scale-[1.01]',
							{
								'justify-end': index % 2 !== 0,
							}
						)}
						key={`${company} ${jobTitle}`}
					>
						<Job
							company={company}
							jobTitle={jobTitle}
							fromDate={fromDate}
							toDate={toDate}
							technologies={technologies}
						>

						</Job>
					</div>
				)
			)}
		</>
	);
};

export { WorkExperience };
