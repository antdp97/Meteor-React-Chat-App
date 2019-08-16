/**
 * Register each api
 * import private server methods and server publications
 */

// users api
import '../../api/users/publications.js';
import '../../api/users/hooks.js';

// counters api (example)
import '../../api/counters/methods.js';
import '../../api/counters/publications.js';

// import api conversations
import '../../api/conversations/conversations';
import '../../api/conversations/publications';

// import api invitations
import '../../api/invitations/invitations';
import '../../api/invitations/publications';

