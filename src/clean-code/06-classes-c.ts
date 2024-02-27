(() => {

    // aplicando el principio de responsabilidad única
    // priorizar la composición frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }


    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ email, role }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }


    class Settings {
        public lastOpenFolder: string;
        public workingDirectory: string;
        constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }


    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({ lastOpenFolder, workingDirectory, email, role, name, gender, birthdate }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'frank@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Frank',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();