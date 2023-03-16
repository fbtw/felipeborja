import { Education } from '../Education';

import { render } from '@testing-library/react';

describe('Education', () => {
	it('renders correctly', () => {
		const { container } = render(<Education education={[]} />);
		expect(container).toMatchSnapshot();
	});
});
