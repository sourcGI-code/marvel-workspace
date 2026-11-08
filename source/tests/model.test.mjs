import test from 'node:test';
import assert from 'node:assert/strict';
import {calendarExport,isLate} from '../src/model.js';
test('calendar export escapes user text and includes explicit alarms but no undated items',()=>{const ics=calendarExport([{id:'one',title:'Review, launch; notes\nNext',body:'Line one\nLine two',dueOn:'2026-12-01',reminderAt:'2026-11-30T14:00:00Z'},{id:'two',title:'No date'},{id:'three',title:'Archived',dueOn:'2026-12-02',archived:true}]);assert.match(ics,/SUMMARY:Review\\, launch\\; notes\\nNext/);assert.match(ics,/TRIGGER;VALUE=DATE-TIME:20261130T140000Z/);assert.match(ics,/DTSTART;VALUE=DATE:20261201/);assert.doesNotMatch(ics,/No date|Archived/);});
test('done and archived items do not show as overdue',()=>{assert.ok(isLate({dueOn:'2020-01-01',status:'backlog'}));assert.equal(isLate({dueOn:'2020-01-01',status:'done'}),false);assert.equal(isLate({dueOn:'2020-01-01',status:'backlog',archived:true}),false);});
