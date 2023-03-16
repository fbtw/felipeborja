
import { render } from '@testing-library/react';
import { WorkExperience } from '../WorkExperience';

describe('WorkExperience', () => {
	it('renders correctly', () => {
		const { container } = render(<WorkExperience jobs={[]} />);
		expect(container).toMatchSnapshot();
	});
});
