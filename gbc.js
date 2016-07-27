function hasClass(obj, className) {
    return (obj.className.indexOf(className) > 0);
}

function deleteBefore(days) {
    var ONE_DAY = 1000 * 60 * 60 * 24;

    let branches = document.querySelectorAll('.branch-summary:not(.is-deleted)');
    if (! branches) {
        return;
    }

    branches.forEach(function (a) {

        var datetime = new Date(a.querySelector('time-ago').attributes.datetime.value).getTime();
        var today = (new Date().getTime());
        var filter = today - (ONE_DAY * days);

        if (datetime < filter) {
            let state = a.querySelector('.state');
            if (state && (hasClass(state, 'state-merged') || hasClass(state, 'state-closed'))) {
                console.log(a);
                a.querySelector('.branch-delete').click();
            }
        }
    });
}


    
let tab = document.querySelector('.js-branches-all.selected');
if (tab) {
    let a = document.createElement('a');
    a.className = 'subnav-item whoa-buddy';
    a.innerHTML = 'DELETE STUFF';
    tab.parentNode.appendChild(a);
    
    a.addEventListener('click', () => {
        deleteBefore(14)
    });
}
