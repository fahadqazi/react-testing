import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    it('has the class commentBox', () => {
        const component = renderComponent(CommentBox);
        expect(component).to.have.class('commentBox');
    });
    it('has a text area', () => {
        const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exit;
    });
    it('has a button', () => {
        const component = renderComponent(CommentBox);
        expect(component.find('button')).to.exist;
    });
});

/**
 testing objectives for CommentBox
 - it should have text area
 - it should have a 'add comment' button
 - entering text into text area should update text area
 */