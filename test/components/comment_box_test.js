import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the class commentBox', () => {
        expect(component).to.have.class('commentBox');
    });
    it('has a text area', () => {
        expect(component.find('textarea')).to.exit;
    });
    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });
});

/**
 testing objectives for CommentBox
 - it should have text area
 - it should have a 'add comment' button
 - entering text into text area should update text area
 */