// DEPENDENCIES
import React from "react";
import { render, screen } from "../../../test-utils/customRender";
import userEvent from '@testing-library/user-event'

// COMPONENTS
import { Pagination } from "./Pagination";

const props = {
    totalPages: 0,
    currentPage: 1,
    handlePage: jest.fn(),
    totalItems: 0,
    itemsPerPage: 0
};

test('render without errors', async () => {
    render(<Pagination {...props} />);
    expect(await screen.findByTestId('pagination-container')).toBeTruthy();
});


test('should render the pagination info', async () => {
    const mockProps = {
        itemsPerPage: 6,
        totalItems: 12
    };
    render(<Pagination {...props} {...mockProps} />);
    expect(await screen.findByText('Elementos por pagina:')).toBeInTheDocument();
    expect(await screen.findByText('6')).toBeInTheDocument();

    expect(await screen.findByText('Total elementos:')).toBeInTheDocument();
    expect(await screen.findByText('12')).toBeInTheDocument();
});

test('should be disabled the next button if currentPage is equal to the totalPages', async () => {
    const mockProps = {
        itemsPerPage: 6,
        totalItems: 24,
        totalPages: 4,
        currentPage: 4
    };
    const { rerender } = render(<Pagination {...props} {...mockProps} />);
    let nextButton = screen.getByTestId('next-button');
    userEvent.click(nextButton);
    expect(props.handlePage).not.toHaveBeenCalled();

    rerender(<Pagination {...props} {...mockProps} currentPage={3} />);
    nextButton = screen.getByTestId('next-button');
    userEvent.click(nextButton);
    expect(props.handlePage).toHaveBeenNthCalledWith(1, 4);
});

test('should be disabled the prev button if currentPage is equal to 1', async () => {
    const mockProps = {
        itemsPerPage: 6,
        totalItems: 24,
        totalPages: 4,
        currentPage: 1
    };
    const { rerender } = render(<Pagination {...props} {...mockProps} />);
    let nextButton = screen.getByTestId('prev-button');
    userEvent.click(nextButton);
    expect(props.handlePage).not.toHaveBeenCalled();

    rerender(<Pagination {...props} {...mockProps} currentPage={3} />);
    nextButton = screen.getByTestId('prev-button');
    userEvent.click(nextButton);
    expect(props.handlePage).toHaveBeenNthCalledWith(1, 2);
});