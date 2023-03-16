import { Job } from '../Job';

import { render } from '@testing-library/react';

describe('Job', () => {
	it('renders correctly', () => {
		const { container } = render(<Job {...[]}>Some body</Job>);
		expect(container).toMatchSnapshot();
	});
});
