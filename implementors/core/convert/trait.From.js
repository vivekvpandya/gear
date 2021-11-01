(function() {var implementors = {};
implementors["gcore"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;u64&gt; for <a class=\"struct\" href=\"gcore/struct.ProgramId.html\" title=\"struct gcore::ProgramId\">ProgramId</a>","synthetic":false,"types":["gcore::general::ProgramId"]}];
implementors["gear_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;u32&gt; for <a class=\"struct\" href=\"gear_core/memory/struct.PageNumber.html\" title=\"struct gear_core::memory::PageNumber\">PageNumber</a>","synthetic":false,"types":["gear_core::memory::PageNumber"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;u8, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"gear_core/message/struct.Payload.html\" title=\"struct gear_core::message::Payload\">Payload</a>","synthetic":false,"types":["gear_core::message::Payload"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[u8; 32]&gt; for <a class=\"struct\" href=\"gear_core/message/struct.MessageId.html\" title=\"struct gear_core::message::MessageId\">MessageId</a>","synthetic":false,"types":["gear_core::message::MessageId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;u64&gt; for <a class=\"struct\" href=\"gear_core/message/struct.MessageId.html\" title=\"struct gear_core::message::MessageId\">MessageId</a>","synthetic":false,"types":["gear_core::message::MessageId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"gear_core/message/struct.Message.html\" title=\"struct gear_core::message::Message\">Message</a>&gt; for <a class=\"struct\" href=\"gear_core/message/struct.IncomingMessage.html\" title=\"struct gear_core::message::IncomingMessage\">IncomingMessage</a>","synthetic":false,"types":["gear_core::message::IncomingMessage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[u8; 32]&gt; for <a class=\"struct\" href=\"gear_core/program/struct.ProgramId.html\" title=\"struct gear_core::program::ProgramId\">ProgramId</a>","synthetic":false,"types":["gear_core::program::ProgramId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;u64&gt; for <a class=\"struct\" href=\"gear_core/program/struct.ProgramId.html\" title=\"struct gear_core::program::ProgramId\">ProgramId</a>","synthetic":false,"types":["gear_core::program::ProgramId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"gear_core/program/struct.Program.html\" title=\"struct gear_core::program::Program\">Program</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"gear_core/storage/struct.InMemoryProgramStorage.html\" title=\"struct gear_core::storage::InMemoryProgramStorage\">InMemoryProgramStorage</a>","synthetic":false,"types":["gear_core::storage::InMemoryProgramStorage"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"gear_core/storage/struct.InMemoryProgramStorage.html\" title=\"struct gear_core::storage::InMemoryProgramStorage\">InMemoryProgramStorage</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"gear_core/program/struct.Program.html\" title=\"struct gear_core::program::Program\">Program</a>&gt;","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"gear_core/message/struct.Message.html\" title=\"struct gear_core::message::Message\">Message</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"gear_core/storage/struct.InMemoryMessageQueue.html\" title=\"struct gear_core::storage::InMemoryMessageQueue\">InMemoryMessageQueue</a>","synthetic":false,"types":["gear_core::storage::InMemoryMessageQueue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"gear_core/storage/struct.InMemoryMessageQueue.html\" title=\"struct gear_core::storage::InMemoryMessageQueue\">InMemoryMessageQueue</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"gear_core/message/struct.Message.html\" title=\"struct gear_core::message::Message\">Message</a>&gt;","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.55.0/alloc/collections/btree/map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree::map::BTreeMap\">BTreeMap</a>&lt;<a class=\"struct\" href=\"gear_core/message/struct.MessageId.html\" title=\"struct gear_core::message::MessageId\">MessageId</a>, <a class=\"struct\" href=\"gear_core/message/struct.Message.html\" title=\"struct gear_core::message::Message\">Message</a>&gt;&gt; for <a class=\"struct\" href=\"gear_core/storage/struct.InMemoryWaitList.html\" title=\"struct gear_core::storage::InMemoryWaitList\">InMemoryWaitList</a>","synthetic":false,"types":["gear_core::storage::InMemoryWaitList"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.55.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"gear_core/storage/struct.InMemoryWaitList.html\" title=\"struct gear_core::storage::InMemoryWaitList\">InMemoryWaitList</a>&gt; for <a class=\"type\" href=\"gear_core/storage/type.MessageMap.html\" title=\"type gear_core::storage::MessageMap\">MessageMap</a>","synthetic":false,"types":["gear_core::storage::MessageMap"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()