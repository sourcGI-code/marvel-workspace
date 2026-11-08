export const STATUS = {backlog:{label:'Backlog',color:'#8792a7'},this_week:{label:'This week',color:'#9d78e5'},in_progress:{label:'Working on it',color:'#e8a344'},ready:{label:'Ready for review',color:'#4d9cce'},blocked:{label:'Stuck',color:'#db6681'},done:{label:'Done',color:'#30ac95'}};
export const API = 'https://marvel-schedule-service.ai-ml-ws-6786.chatgpt.site';
export const today = () => {const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
export const initials=n=>(n||'?').split(' ').slice(0,2).map(x=>x[0]).join('');
export const dateLabel=d=>d?new Date(d+'T12:00:00').toLocaleDateString(undefined,{month:'short',day:'numeric'}):'No date';
export const isLate=i=>i.dueOn&&i.dueOn<today()&&i.status!=='done'&&!i.archived;
const escapeICS=s=>String(s||'').replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,');
const utc=d=>new Date(d).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
export function calendarExport(items){return ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Marvel Labs//Workspace//EN','CALSCALE:GREGORIAN',...items.filter(i=>i.dueOn&&!i.archived).flatMap(i=>['BEGIN:VEVENT',`UID:${i.id}@marvel-workspace`,`DTSTAMP:${utc(new Date())}`,`DTSTART;VALUE=DATE:${i.dueOn.replaceAll('-','')}`,`SUMMARY:${escapeICS(i.title)}`,`DESCRIPTION:${escapeICS(i.body)}`,...(i.reminderAt?['BEGIN:VALARM','ACTION:DISPLAY',`DESCRIPTION:${escapeICS(i.title)}`,`TRIGGER;VALUE=DATE-TIME:${utc(i.reminderAt)}`,'END:VALARM']:[]),'END:VEVENT']),'END:VCALENDAR',''].join('\r\n');}
