import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let component;  //undefined

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

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows that text is the text area', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });
        it('clears text area after clicking submit button', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});

/**
 testing objectives for CommentBox
 - it should have text area
 - it should have a 'add comment' button
 - entering text into text area should update text area
 */