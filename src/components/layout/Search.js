/* eslint-disable */
import React, { Component } from 'react';
import $ from "jquery/dist/jquery.js";
import "jquery-ui/ui/widgets/autocomplete.js";

class Searcher extends Component {
    componentDidMount() {
        this.$node = $(this.refs.autocomplete);;
        const self = this;
        const availableTags = [
            "ActionScript",
            "AppleScript",
            "Asp",
            "BASIC",
            "C",
            "C#",
            "C++",
            "Clojure",
            "COBOL",
            "ColdFusion",
            "Erlang",
            "Fortran",
            "Groovy",
            "Haskell",
            "Java",
            "JavaScript",
            "Lisp",
            "Perl",
            "PHP",
            "Python",
            "Ruby",
            "Scala",
            "Scheme"
        ];
        $(this.$node).autocomplete({
            source: availableTags,
            select: function (event, ui) {
                self.props.onSelectCategory(event, ui);
            }
        });
    }
    render() {
        return (
            <div class="card my-4">
                <h5 class="card-header">Search by category</h5>
                <div class="card-body">
                    <div class="input-group">
                        <input type="text" ref="autocomplete" class="form-control" placeholder="Search for..." />
                        <span class="input-group-btn">
                            <button class="btn btn-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Searcher;